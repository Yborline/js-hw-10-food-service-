 export default function toggleTheme() {

     if (document.body.classList.contains('light-theme')) {
         createDarkTheme()
         localStorage.removeItem('createTheme');
         localStorage.setItem('createTheme', 'dark-theme');


    } else {
         createLightTheme();
        localStorage.removeItem('createTheme');
         localStorage.setItem('createTheme', 'light-theme')
    }
}



function createDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

       
}

function createLightTheme() {
     document.body.classList.remove('dark-theme')    
            document.body.classList.add('light-theme')

}