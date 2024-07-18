const tubeLight = () =>{
          
    //   alert("subscribe my channel");
    for(x=1 ;x<6;x++){
      let bid = document.getElementById('lightid'.concat(x));
      if (bid.src.match('lightOn')){
            bid.src = "lightOff.jpg"
      }else{
        bid.src="lightOn.jpg";
      }
    }

}