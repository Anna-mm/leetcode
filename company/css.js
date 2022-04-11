// Box Model
width: 100px;
height:100px;
margin: 5px;
padding: 5px;
border: 5px solid blue;
background:red;

content-box:
// 红色 box 的 宽度:
// 蓝色 box 的 宽度:
border-box:
// 红色 box 的 宽度:
// 蓝色 box 的 宽度:

content-box:
// 红色 box 的 宽度: width+padding=105
// 蓝色 box 的 宽度: width+padding+border=115
border-box:
// 红色 box 的 宽度: width=110
// 蓝色 box 的 宽度: widht+border=110+5*2=120