// Adapted from the following Processing example:
// http://processing.org/learning/topics/follow3.html

// The amount of points in the path:
var points = 25;

// The distance between the points:
var length = 35;

var path = new Path({
	strokeColor: '#E4141B',
	strokeWidth: 350,
	strokeCap: 'round'
});
var path1 = path.clone();
path1.strokeColor = '#34AB2D';
var path2 = path.clone();
path2.strokeColor = '#FDCCCB';
var path3 = path.clone();
path3.strokeColor = '#42423F';

var start = new Point(0,0);
var start1 = new Point(150,110);
var start2 = new Point(250,350);
var start3 = new Point(100,450);

for (var i = 0; i < points; i++) {
	path.add(start + new Point(i * length, 0));
	path1.add(start1 + new Point(i * length, 0));
	path2.add(start2 + new Point(i * length, 0));
	path3.add(start3 + new Point(i * length, 0));
}

function onMouseMove(event) {
	path.firstSegment.point = event.point;
	path1.firstSegment.point = event.point+100;
	path2.firstSegment.point = event.point+200;
	path3.firstSegment.point = event.point+300;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
		changeSegment(segment);
		var segment1 = path1.segments[i];
		changeSegment(segment1);
		var segment2 = path2.segments[i];
		changeSegment(segment2);
		var segment3 = path3.segments[i];
		changeSegment(segment3);
	}
	path.smooth({ type: 'continuous' });
	path1.smooth({ type: 'continuous' });
	path2.smooth({ type: 'continuous' });
	path3.smooth({ type: 'continuous' });
}

function changeSegment(segment) {
	var nextSegment = segment.next;
	var vector = segment.point - nextSegment.point;
	vector.length = length;
	nextSegment.point = segment.point - vector;
}

function onMouseDown(event) {
	path.fullySelected = false;
	path.strokeColor = '#e4141b';
}

function onMouseUp(event) {
	path.fullySelected = false;
	path.strokeColor = '#e4141b';
}