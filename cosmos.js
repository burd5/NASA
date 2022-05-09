
fetch(`https://api.nasa.gov/planetary/apod?api_key=4zfIgf0hDo0BDPSEfxaIIvvKlUfAPG8GRb9zFjMF`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          if(data.media_type === 'image'){
            document.querySelector('#pictureOfDay').src = data.url
            document.querySelector('#videoOfDay').style.display = 'none'
          }else if(data.media_type === 'video'){
            document.querySelector('#videoOfDay').src = data.url
            document.querySelector('#pictureOfDay').style.display = 'none'

            }
        document.querySelector('.explanation').innerHTML = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


document.querySelector('button').addEventListener('click', getNewPicture)

function getNewPicture(){
    let date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=4zfIgf0hDo0BDPSEfxaIIvvKlUfAPG8GRb9zFjMF&date=${date}`


    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          if(data.media_type === 'image'){
            document.querySelector('#pictureOfDay').src = data.url
            document.querySelector('iframe').style.visibility = 'none'
          }else if(data.media_type === 'video'){
            document.querySelector('#videoOfDay').src = data.url
            document.querySelector('#pictureOfDay').style.display = 'none'

            }
        document.querySelector('.explanation').innerHTML = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}