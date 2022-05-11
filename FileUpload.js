function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();
  console.log(file)
  
  reader.onload = function() {
    const uploadImageArea = document.querySelector('.uploadImageArea')
    uploadImageArea.innerHTML = `<img src="${reader.result}" alt="アップロードされた画像" id="uploadImage" onclick="deleteImage()"/>`
  };  
  reader.onerror = function() {
    console.log(reader.error);
  };
  
  reader.readAsDataURL(file);

}

function deleteImage() {
  let isDelete = window.confirm('削除しますか？')
  if(isDelete) {
    document.querySelector('.uploadImageArea').innerHTML = ""
  }else {
  }
}
