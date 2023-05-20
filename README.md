
# Página de Aterrizaje del Campus Virtual de la FIUBA

Esta es una página de aterrizaje hecha con React.js, diseñada para funcionar como portal a los distintos sitios relacionados a la Facultad de Ingeniería de la Universidad de Buenos Aires. Incluye un carrusel con imágenes de los distintos edificios de la FIUBA, una marquesina donde se pueden ver distintos anuncios, una botonera que permite navegar por los distintos sitios de la facultad, y un pie de página que incluye información adicional.

<div align="center">
  <img src="https://user-images.githubusercontent.com/75450615/228704389-a2bcdf3e-d4d6-4236-b1c6-57fd9e545625.png#gh-dark-mode-only" width="50%" align="center">
</div>

## Empezando

Para empezar con esta página de aterrizaje, siga los siguientes pasos:

1. Clona el repositorio a tu máquina local

```bash
git clone https://github.com/collazomanuel/campus-landing.git
```

2. Instala las dependencias

```bash
cd campus-landing
npm install
```

3. Ejecuta el servidor de desarrollo

```bash
npm start
```

Esto iniciará un servidor de desarrollo en http://localhost:3000, donde podrás ver la página de aterrizaje en acción.

## Personalización

Para personalizar las distintas partes de la página, es necesario recompilar el proyecto, terminando el servidor levantado anteriormente y levantando uno nuevo siguiendo el paso 3 de la sección previa.

### Imágenes del carrusel

Sigue estos pasos:

1. Modifica el contenido en el directorio public/img, agregando o quitando las imágenes previas del carrusel (observación: no eliminar la imágen del pie de página).

2. En el archivo src/Components/Slider.js, editar el componente Slider. Primero, se definen los textos que contienen las rutas relativas de cada imagen al principio del componente. Por ejemplo:

```javascript
const firstImage = './img/fiuba-carousel-bg-pc-colorized.png'
const secondImage = './img/fiuba-carousel-bg-lh-colorized.png'
const thirdImage = './img/fiuba-carousel-bg-cu-colorized.png'
```

3. Modifica el JSX del componente Slider. Dentro del elemento padre Carousel, tenemos 1 elemento Carousel.Item por cada imagen del carrusel. Se pueden agregar nuevos elementos, así como eliminar preexistentes, siempre respetando la siguiente estructura para cada uno:

```jsx
<Carousel.Item>
  <CarouselImage imgSource={firstImage} />
  <Carousel.Caption>
    <CarouselCaption />
  </Carousel.Caption>
</Carousel.Item>
```

### Texto del carrusel

Para modificar el texto del carrusel, se debe editar el elemento div con nombre de clase "subtitle" que es hijo del componente CarouselCaption que se encuentra dentro del archivo src/Components/Slider.js. Procurar separar cada línea del texto con elementos <br />. Por ejemplo:

```html
Toda la oferta educativa de la<br/>
Facultad de Ingeniería de la Universidad de Buenos Aires<br/>
en un mismo espacio
```

### Anuncios de la marquesina

Para editar los anuncios presentados en la marquesina, sólo se tiene que modificar el archivo de texto src/anuncios.txt, teniendo en cuenta que se debe ubicar cada anuncio en una línea distinta. En caso de incluir hipervínculos en los anuncios, el programa se encarga de mostrarlos en un color distinto y de permitir clickearlos para dirigirnos a la página a la que apuntan.

### Enlaces de los botones

Si se necesita actualizar la dirección URL de alguno de los botones que se encuentran bajo la marquesina, se pueden editar las referencias en el archivo Menu.js, donde se definen las variables de las direcciones luego de realizar la importación de módulos. Por ejemplo:

```javascript
const linkGrado = 'https://campusgrado.fi.uba.ar'
const linkPosgrado = 'https://campus2.fi.uba.ar'
const linkCapacitacionDocente = 'https://campusgrado.fi.uba.ar/course/index.php?categoryid=752'
const linkCetec = 'https://campusgrado.fi.uba.ar/course/index.php?categoryid=751'
```

### Botones

Si se quiere agregar un botón nuevo (o modificar uno existente), se necesita contar, aparte del texto, con un icono en formato .svg, que ubicaremos en el directorio src/icons. La estructura de este archivo icono debe consistir en un único elemento XML "svg" con los siguientes 4 atributos definidos:

- version
- xmlns
- viewBox
- width
- height

Tener en cuenta que cualquier parámetro adicional puede interferir en la correcta visualización del icono en el sitio. El siguiente es un ejemplo de la etiqueta de apertura de un elemento que cumple con estas condiciones:

```svg
<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 74" width="106" height="74">
```

Una vez definido el texto del botón y ubicado el icono en src/icons, agregamos el icono programa en el archivo src/components/Icon.js, guiándonos por el ejemplo de cualquier otro icono preexistente. Luego, adjuntamos el enlace de la forma que se describió en la sección anterior. Por último, ubicamos un nuevo componente dentro del elemento div con nombre de clase "buttons-container", siguiendo la estructura del siguiente ejemplo:

```jsx
<div className='buttons-container'>
  <MenuButton type='Book' text='Grado' link={linkGrado} />
  <MenuButton type='Hat' text='Posgrado' link={linkPosgrado} />
  <MenuButton type='Teacher' text='Capacitación docente' link={linkCapacitacionDocente} />
  <MenuButton type='Cetec' text='Cetec' link={linkCetec} removeText='true' />
</div>
```

Se puede observar en el cuarto botón que es posible crear un botón sin texto, nada más debemos definir el atributo removeText en "true". De esta forma, el botón consistirá únicamente de un icono que se encuentra centrado.

## Despliegue

Para desplegar la página de aterrizaje, sigue estos pasos:

1. Construye la versión de producción a la aplicación:

```bash
npm run build
```

2. Despliega la carpeta "build" en tu proveedor de alojamiento.

## Dependencias

Esta página de aterrizaje fue construida con las siguientes dependencias:

- react-bootstrap
- react-easy-marquee
- react-linkify

<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/75450615/229292883-b8f31ca1-f9d5-4c7c-a415-3a4fcd9f380e.png" width="100%" align="center">
</p>

