// Mostrar el formulario de calculadora cuando se hace clic en el botón "Calcular IMC"
document.getElementById('showCalculatorBtn').addEventListener('click', function() {
    // Mostrar el formulario y ocultar el botón
    document.getElementById('calculatorContainer').style.display = 'block';
    document.getElementById('showCalculatorBtn').style.display = 'none';
});

// Calcular IMC y mostrar el resultado cuando se hace clic en el botón "Calcular IMC"
document.getElementById('calculateBtn').addEventListener('click', function() {
    // Obtener los valores de peso y altura
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Verificar que los valores sean válidos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Por favor, ingresa valores válidos para peso y altura.");
        return;
    }

    // Calcular IMC
    const imc = weight / (height * height);

    // Determinar el estado según el IMC
    let status = '';
    if (imc < 18.5) {
        status = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        status = 'Normal';
    } else if (imc >= 25 && imc < 29.9) {
        status = 'Sobrepeso';
    } else {
        status = 'Obesidad';
    }

    // Mostrar el resultado
    document.getElementById('imcValue').textContent = imc.toFixed(2);
    document.getElementById('status').textContent = status;

    // Mostrar el div con el resultado
    document.getElementById('result').style.display = 'block';
});
