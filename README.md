
# Página de Aterrizaje para el Campus Online de la FIUBA

Esta es una página de aterrizaje hecha con React.js, diseñada para funcionar como portal a los distintos sitios relacionados a la Facultad de Ingeniería de la Universidad de Buenos Aires. Incluye un carrusel con imágenes de los distintos edificios de la FIUBA, una marquesina donde se pueden ver distintos anuncios, una botonera que permite navegar por los distintos sitios de la facultad, y un pie de página que incluye información adicional.

<p align="center">
  <img src="https://user-images.githubusercontent.com/75450615/228704389-a2bcdf3e-d4d6-4236-b1c6-57fd9e545625.png" width="50%" align="center">
</p>

## Empezando

Para empezar con esta página de aterrizaje, siga los siguientes pasos:

1. Clona el repositorio a tu máquina local

```bash
git clone https://github.com/your-username/react-landing-page.git
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

1. Modifica el contenido en el directorio public/img, agregando o quitando las imágenes previas del carrusel (Observación: no eliminar la imágen del pie de página).

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

## Despliegue

Para desplegar la página de aterrizaje, sigue estos pasos:

1. Construye la versión de producción a la aplicación:

```bash
npm run build
```

2. Despliega el directorio "build" en tu proveedor de alojamiento.

## Dependencias

Esta página de aterrizaje fue construida con las siguientes dependencias:

- bootstrap
- react-easy-marquee
- react-linkify

<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/75450615/228704566-424d111e-2530-4b96-b5c5-5c744e49c67f.png" width="100%" align="center">
</p>
