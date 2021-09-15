const elForm = document.querySelector('.formAuthor');
console.log(elForm);

elForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const authorName = formData.get('nameAuthor')
    const { data } = await axios.post('/acp/author', formData);
    console.log(data);
});