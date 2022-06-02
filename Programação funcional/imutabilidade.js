//exemplo JS
const cart = {
  quantity: 2,
  total: 200,
};

//não fazer
cart.quantity = 3;

//certo
const newCart = { ...cart, quantity: 3 }; // reticencias puxa o valor de outro obj

//exemplo ReactJs
const [amout, setAmount] = useState(0);

//não fazer
amout = 2;

//fazer
setAmount(2);
