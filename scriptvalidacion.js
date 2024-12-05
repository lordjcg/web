document.addEventListener('DOMContentLoaded', function() {
           const form = document.getElementById('loginForm');
           const username = document.getElementById('username');
           const password = document.getElementById('password');
           const usernameError = document.getElementById('usernameError');
           const passwordError = document.getElementById('passwordError');

           // Función para validar el nombre de usuario
           function validateUsername() {
               // Reglas de validación:
               // 1. No debe estar vacío
               // 2. Debe tener entre 4 y 20 caracteres
               // 3. Solo puede contener letras, números y guiones bajos
               const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;

               if (username.value.trim() === '') {
                   usernameError.textContent = 'El nombre de usuario no puede estar vacío';
                   username.classList.add('invalid');
                   return false;
               }

               if (!usernameRegex.test(username.value.trim())) {
                   usernameError.textContent = 'El nombre de usuario debe tener entre 4 y 20 caracteres y solo puede contener letras, números y guiones bajos';
                   username.classList.add('invalid');
                   return false;
               }

               usernameError.textContent = '';
               username.classList.remove('invalid');
               return true;
           }

           // Función para validar la contraseña
           function validatePassword() {
               // Reglas de validación:
               // 1. No debe estar vacía
               // 2. Debe tener al menos 8 caracteres
               // 3. Debe contener al menos una letra mayúscula
               // 4. Debe contener al menos un número
               // 5. Debe contener al menos un carácter especial
               const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

               if (password.value.trim() === '') {
                   passwordError.textContent = 'La contraseña no puede estar vacía';
                   password.classList.add('invalid');
                   return false;
               }

               if (!passwordRegex.test(password.value)) {
                   passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial';
                   password.classList.add('invalid');
                   return false;
               }

               passwordError.textContent = '';
               password.classList.remove('invalid');
               return true;
           }

           // Validación en tiempo real
           username.addEventListener('input', validateUsername);
           password.addEventListener('input', validatePassword);

           // Validación al enviar el formulario
           form.addEventListener('submit', function(event) {
               event.preventDefault();

               const isUsernameValid = validateUsername();
               const isPasswordValid = validatePassword();

               if (isUsernameValid && isPasswordValid) {
                   // Aquí iría la lógica de autenticación real (por ejemplo, llamada a un backend)
                   alert('Formulario válido. Iniciando sesión...');
                   // form.submit(); // Descomentar para envío real
               }
           });
       });
