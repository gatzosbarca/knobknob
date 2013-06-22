/*----------------------------
  knobKnob Styles
-----------------------------*/


.knob{
	width:83px;
	height:83px;
	position:relative;
}

.knob .top{
	position:absolute;
	top:0;
	left:0;
	width:83px;
	height:83px;
	background:url('knob.png') no-repeat;
	z-index:10;
	cursor:default !important;
}

.knob .base{
	width:83px;
	height:83px;
	border-radius:50%;
	box-shadow:0 5px 0 #4a5056,5px 5px 5px #000;
	position:absolute;
	top:0;
	left:0;
	z-index:1;
}

.knob .top:after{
	content:'';
	width:10px;
	height:10px;
	background-color:#666;
	position:absolute;
	top:50%;
	left:10px;
	margin-top:-5px;
	border-radius: 50%;
	cursor:default !important;
	box-shadow: 0 0 1px #5a5a5a inset;
}

.knob [draggable] {
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
