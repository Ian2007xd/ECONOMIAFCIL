function showForm(formId) {
    // Ocultar todos los formularios
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.style.display = 'none';  // Oculta el formulario
    });

    // Mostrar el formulario seleccionado
    const activeForm = document.getElementById(formId);
    activeForm.style.display = 'block';  // Muestra el formulario seleccionado
}
