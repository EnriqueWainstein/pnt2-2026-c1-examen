# PROGRAMACION DE NUEVAS TECNOLOGIAS 2

## Instrucciones de resolución de examen

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador react.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del frontend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone de repositorio en tu cuenta de github
> 3. Instalar las dependencias
> 4. La url del backend es: https://tp2backend-a5aqduchhdfrdffm.brazilsouth-01.azurewebsites.net ya se encuentra desplegado en Azure. Por ahora existen los siguientes endpoints.
>    El backend se conecta con una base de datos MongoDB en la cual se encuentra la base de datos **sample_mflix** con una collection llamada **movies**, que contiene miles de películas.
> 5. Probá los endpoints que ya se encuentran desarrollados. Son **públicos**, no requieren autenticación. Te aconsejo que uses el paginado para probar (mira la definición a continuación). Si por algún motivo no funcionase, solicitá asistencia.
>    - `GET /api/movies?limit=[limit]&page=[page]` → devuelve un array de películas
>    - `GET /api/movies/:id` → devuelve el detalle de una película
> 6. El proyecto también cuenta con un backend de usuarios. Ya se encuentran implementadas las páginas `/register` y `/login`. Al registrarse, el email del usuario se almacena en `localStorage` bajo la clave `userEmail`. Esto se usará en algunas tareas para identificar al usuario.
>    - `POST /api/users/register` → body: `{ name, email, password }`
>    - `POST /api/users/login` → body: `{ email, password }`

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
>
> 1. Agregar la columna **Año** (`year`) a la tabla de películas en el componente `MovieTable.jsx`.
>    - El campo se llama `year` en el objeto movie que devuelve la API.
>    - Mostrar `-` si el campo no existe.
> 2. Agregar un **buscador por título** dentro del componente `MovieTable.jsx`.
>    - Debe ser un `input` de texto que filtre el listado visible en tiempo real según lo que escribe el usuario.
>    - El filtrado debe hacerse del lado del cliente (no hace falta llamar a la API de nuevo).
> 3. Agregar un **filtro por género** en el componente `MovieTable.jsx`.
>    - El `<select>` con los géneros y el estado `selectedGenre` **ya están armados** en el componente.
>    - Implementá la lógica de filtrado: usá `selectedGenre` para filtrar el array `filteredMovies`. Si `selectedGenre` está vacío (`""`), no filtrar.
>    - Pista: cada película tiene un array `genres`. Podés usar `.includes(selectedGenre)` para verificar si el género está en el array.
> 4. Implementar la **página de detalle** de cada película consumiendo `GET /api/movies/:id`.
>    - Al hacer click en el título de una película, navegar a `/movies/[id]`.
>    - Mostrar al menos: `title`, `plot`, `cast`, `year` y `genres`.
>    - Mostrar el **poster** de la película usando el campo `poster` del objeto (es una URL de imagen). Usá una etiqueta `<img>` con `src={movie.poster}`. Si el campo no existe, no mostrar nada.
> 5. Agregar **ordenamiento por año** en el componente `MovieTable.jsx`.
>    - El botón "Año ↑ / ↓" y el estado `sortAsc` **ya están armados** en el componente.
>    - Implementá la lógica de ordenamiento: usá `sortAsc` para ordenar el array `genreFilteredMovies` por `year`.
>    - Si `sortAsc` es `true` → de menor a mayor; si es `false` → de mayor a menor.
>    - Importante: no mutar el array original, usá `[...genreFilteredMovies].sort(...)`.

> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

---

## Instrucciones para la entrega

Si ya terminaste, o son las 10:00, asegurate de seguir los siguientes pasos para la entrega:

1. Completar el listado de rutas implementadas más abajo en este mismo archivo.
2. Realizar un **commit** a tu repositorio con un mensaje que incluya tu **nombre completo**.
3. Realizar un **push** a tu repositorio.
4. Realizar un **pull request** al repositorio original.

## Listado de rutas implementadas


| Ruta | Descripción | Observaciones |
|------|-------------|---------------|
| `/` | Página de inicio | Ya implementada |
| `/login` | Inicio de sesión | Ya implementada |
| `/register` | Registro de usuario | Ya implementada |
| `/movies` | Listado de películas con buscador | Ya implementada |
| `/movies/[id]` | Detalle de película | |