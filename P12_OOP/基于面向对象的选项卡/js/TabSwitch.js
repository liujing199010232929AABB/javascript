// 1.构造函数
// 2.属性属于实例的属性
// 3.添加到原型上prototype

//1.构造选项卡的函数
function TabSwitch(fatherObj){
    //保存this
    // console.log(this);//指向函数对象TabSwitch
    var _this = this;
    // console.log(_this);//指向函数对象TabSwitch
    //2.绑定实例属性
    this.tablis = fatherObj.children[0].getElementsByTagName('li');
    this.contentDivs = fatherObj.getElementsByTagName('div');
    for(var i=0;i<this.tablis.length;i++){
        //绑定i的索引
        this.tablis[i].index = i;
        this.tablis[i].onclick = function(){
            // console.log(this);//指向每个li对象
            _this.clickFun(this.index);
        }   
    }
}
//3.绑定共享的方法
TabSwitch.prototype.clickFun = function(index){
    console.log(this);//指向函数对象TabSwitch   object,HTMLElement
    //去掉所有
    for(var j=0;j<this.tablis.length;j++){
        this.tablis[j].className = '';
        this.contentDivs[j].style.display = 'none';
    }
    this.tablis[index].className='active';
    this.contentDivs[index].style.display = 'block';
}