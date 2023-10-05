

let seend=()=>{
 
  let ab=document.getElementById("Input1").value
  let bc=document.getElementById("Input2").value
  let cd=document.getElementById("Input3").value
  let de=document.getElementById("input4").value

  let data=[]
  let alldata={
    ab,bc,cd,de
  }
  data.push(alldata)
  console.log(data)

  let cal=localStorage.setItem("order details",JSON.stringify(data))
  alert("Thank You For Register With Us");

  let RegEx=/(^[\W][A,Z]{0,1})([\w][a,z])$/
  if(ab.test(RegEx)){
    alert("Sucessfull")
  }
  else{
    {"pls give correct"}
  }

}
let getdata=async()=>{
  let a=await fetch("index.json")
  let b=await a.json()
  b.map((value,index)=>{
    var menu_list=document.getElementById("show");
    menu_list.innerHTML+='<div class="col-sm-12 col-12 col-md-6 col-lg-3 mt-1 p-4 "><div class="card " style="width: 18rem;"><img src="'+value.img+'" class="card-img-top cardmenu " alt="" style="height:10rem"><div class="card-body"><h5 class="card-title text-center">'+value.name+'</h5><h3 class="card-text text-center">'+value.amount+'</h3></div></div>'
  })
}
getdata()