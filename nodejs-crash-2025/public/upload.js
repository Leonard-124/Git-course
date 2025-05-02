

function previewFile() {
    const fileInput = document.getElementById('mediaFile');
    const previewContainer = document.getElementById('preview');
    const fileError = document.getElementById('fileError');
    previewContainer.innerHTML = '';//Clear previous preview
    fileError.textContent = '';//Clear any previous error

    const file = fileInput.files[0];
    if(file) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm', 'video/ogg'];
        if(!allowedTypes.includes(file.type)) {
            fileError.textContent = 'Invalid file type. Please select an image (JPEG, PNG, GIF) or a video (MP4, WebM, OGG).';
            fileInput.value = '';//Clear the invalid selection
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            const mediaType = file.type.startsWith('image/') ? 'image' : 'video';
            const mediaElement = document.createElement(mediaType);
            mediaElement.src = e.target.result;
            mediaElement.controls = mediaType === 'video';//Show controls for video
            mediaElement.style.maxWidth = '100%';
            mediaElement.style.height = 'auto';
            previewContainer.appendChild(mediaElement);
        }
        reader.readAsDataURL(file);
    }else {
        previewContainer.innerHTML = '<p>No file selected.</p>';
    }
}
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();//Prevent the form from submitting normally
    const formData = new FormData(this);
    console.log('Form Data:', formData.get('mediaFile'));
    console.log('caption:', formData.get('caption'));
    alert('Simulatig post submission Check the browser console for data');
    document.getElementById('uploadForm').requestFullscreen();
    document.getElementById('preview').innerHTML = '';
});