<h1 id='test'>Hello</h1>
​
<script>
  const header = document.getElementById('test');
  const test = 'It works!'
​
  const callbackCallsFunction = (value) => {
    console.log(value);
  }
​
  // Eventlistener chama o callback que chama a função
  header.addEventListener('click', () => {
    callbackCallsFunction(test);
  });
​
  // A ideia aqui é que usamos a função do addEventListener para chamar a função que vamos utilizar.
  // A função que chamamos em seguida consegue aceitar variáveis passadas para ela.
​
</script>