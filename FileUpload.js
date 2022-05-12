function readFile(input) {
  const files = input.files;
  const imageList = document.querySelector(".uploadImageArea");

  Array.from(files).forEach(element => {
    let reader = new FileReader(); 
    reader.readAsDataURL(element);

    reader.onload = function(e) {
      let img = document.createElement("img");
      img.setAttribute('src', e.target.result)
      img.setAttribute('id', "uploadImage")
      img.setAttribute('onclick', "deleteImage(this)")
      imageList.appendChild(img);
    }  
    reader.onerror = function() {
      console.log(reader.error);
    };
  })
 
}
function deleteImage(img) {
  let isDelete = window.confirm("画像を削除しますか？");
  if(isDelete) {
    const uploadImageArea = document.querySelector('.uploadImageArea');
    uploadImageArea.removeChild(img);
  }    
}
