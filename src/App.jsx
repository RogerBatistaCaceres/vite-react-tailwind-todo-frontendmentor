import CrossIcon from "./components/icons/CrossIcon.jsx";
import MoonIcon from "./components/icons/MoonIcon.jsx";

const App = () => {
  return (
    // Empezamos a poner las clases de tailwindccs... poner una imagen de background y que no se repita
    // bg-cover es para que cubra toda la página
    // mx-auto es un margin a la izquierda y a la derecha automatico
    // px-4 es un padding x de 4
    // <article /> por lo general lo utilizamos como un contenedor de elementos que se van
    // a repetir...
    // cuando tenemos elemento a la Izquierda y a la derecha lo mejor es trabajar con
    // flexbox justify-between, para enviar un elemento a cada lado...
    // Con flex podemos posicionar los elementos uno a lado del otro.
    // Espaciados: mt, px
    // mt-8, espaciados magin-Top...
    // px-4, padding x de 4
    // tracking-widest,tracking-[0.3em]  para dar la separación entre las letras ...
    //  si usamos los corchetes es para espeficicar un tamaño personalizado a la separación entre las letras
    //  lo común es no usarlo, solo si es necesario.
    // rounded-md: es para redondear los bordes del input
    // overflow-hidden: Esto hace que el contenido no se escape de su contenedor... y que el input del
    // create todo respete el redondeado.
    // py-4: paddin arriba y abajo, por las y de -4
    // inline-block: convierte elementos de linea a bloques y se les puede poner entonces h y w Height, y Width
    // items-center: es para alinear los elementos al centro. se usa con flex y con grip
    // w-full: le aplica un width del 100% al input para ampiarlo
    // outline-none: para que no me salga el border el input cuando voy a escribir en él.
    // min-h-screen: Hace que pinte el backqround en toda la altura de la pantalla, toma mímimo el 100% del alto de la pantalla (viewport)
    // flex grow: hace que los elementos traten de crecer lo máximo posible.
    // flex-none: es para que esos elementos no crezcan, que solo crezca el que tiene grow
    // hover: te pone el color cuando se pasa por arriba del botón
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
            todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
          <span className="board inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="text-gray w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white">
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="board inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online Javascript curse en bluuweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="board inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online Javascript curse en bluuweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="board inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online Javascript curse en bluuweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <section className="flex justify-between px-4 py-4">
            <span className="text-gray-400">5 item left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="mt-8 text-center"> Drag and Drop to reorder list</p>
    </div>
  );
};

export default App;
