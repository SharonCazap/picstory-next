import React from 'react';

import { ContainerMain, Banner, Container, Autor, AutorDatos, Historia, HistoriaTexto, Valorar, AutorDescripcion, AutorInfo, Accion } from './styles';
import { Wrapper, Boton } from '../../components';

function HistoriaContainer() {
  return (
    <ContainerMain>
      <Banner>
        <h1>Sin fin de viajes en el subte D</h1>
      </Banner>
      <Wrapper>
        <Container>
          <Autor>
            <figure>
              <img src='./images/usuario.jpg' alt='UserImage' />
            </figure>
            <AutorDatos>
              <h3>Tatiana Numerosky</h3>
              <h6>15 mayo - <span>8 min</span></h6>
            </AutorDatos>
          </Autor>
          <Historia>
            <HistoriaTexto>
              <p>
                Todas las mañanas me subía al subte D, sin destino alguno, pero con una meta por alcanzar.
                Recopilar la mayor cantidad de dinero posible, para llegar a la noche y tener, humildemente,
                un trozo de pan entre mis dientes. El trayecto iniciaba en Congreso de Tucumán, y terminaba
                en Catedral. Y así, un sin fin de idas y vueltas al mismo lugar.
              </p>
              <p>
                Tomaba mi antigua guitarra y mi pequeño y destartalado parlante, y al compás de mis notas
                musicales, iluminaba aquellos rostros opacados de responsabilidades y deudas. Aquellas miradas
                perdidas, de adinerados sin límites, que buscan tener cada día un poco más. Sin embargo, yo…
                yo no tenía nada, pero tampoco nada que perder.
              </p>
              <p>
                Tiraban monedas en mi gorra, y algún que otro apiadado me daba un billete con un mensaje de
                "mucha suerte muchachita". Ellos eran de los mejores. A diferencia de los que ni siquiera eran
                capaces de mirarme a los ojos, ellos detenían su carrera de contratiempos, y se fijaban en mí.
                Escuchaban mi música, reconocían mi talento. Y aunque solo era por unos escasos segundos, observar
                la sonrisa que se asomaba por sus labios, era uno de los pocos, por no decir únicos, cariños al
                alma que recibía a lo largo del día.
              </p>
              <p>
                Con su pequeña ayuda, mis días grises tomaban, levemente, un poco de color. Tendría dinero para
                darle a mi mentor, que con tanta furia me regañaba. No cobraría palizas, ni gritos. Sería al menos
                un día con menos sufrimiento. Intentaba recordar cuál había sido el día más alegre de mi vida.
                Ningún recuerdo específico tomaba el control de mi psique.
              </p>
              {/* Imagen */}
              <p>
                Observaba mi rostro en el reflejo del vidrio del vagón. En él, encontraba la figura de mi madre...
                mi tan amada madre que usualmente me acompañaba en este sin fin de viajes en el subte D, y que un
                día murió destrozada, por aquel hombre que, inhumanamente, abusó de ella y luego la asesinó. Dejándome
                así, con la incertidumbre de vivir sin aquella figura que iluminaba mis días, mi fiel compañera de
                viajes y de vida.
              </p>
              <p>
                Este entristecedor recuerdo se desdibujaba con el desesperante sonido de los rieles, sentía que
                existía cierta sincronía entre el ritmo de los vagones y el latido de mi corazón, que llamaba a la
                esperanza de que cada día fuese mejor que el anterior. Renacía en mí el desapego de descender en
                cualquier estación. Lo que era una atractiva sensación, ya que, nuevamente, asimilaba un rumbo sin
                inicio y un destino sin final. Hecho de mera apariencia, porque los cálculos de horarios, rutas del
                tren y del movimiento de las multitudes estaban analizadas con precisión, para lograr así los pesos diarios.
              </p>
              <p>
                Repentinamente, mis cálculos empezaban a fallar. El flujo de personas que circulaba a diario comenzaba
                a disminuir gradualmente. Los vagones se vaciaban cada día un poco más. Poco a poco, los seres humanos
                colocaban barbijos sobre sus rostros. No solo ya no podía observar su sonrisa, sino que tampoco me
                entregaban billetes. Los pocos que me observaban, lo hacían de reojo. Ni una sola moneda en mi gorro.
              </p>
              <p>
                En la búsqueda de infiltrarme en un restaurante fino, desafiaba a la suerte de que algún apiadado me
                compartiera algo que no fuese el rutinario e insípido pan. Las grandes puertas traían colgado de sí,
                extrañamente,  un letrero que decía: “Cerrado temporalmente”. No comprendía cómo el lugar que solía
                ver de afuera, a diario, estaba en esta ocasión cerrado para mi mala suerte. Sin embargo, lograba
                divisar luces tenues en su interior, y un enorme televisor que colgaba de la pared proyectando un
                noticiero. En él se observaba un reportero, también con un barbijo. Yo no comprendía lo que estaba
                sucediendo. Hasta que finalmente, los titulares lo esclarecieron. “El Coronavirus ataca la ciudad.
                Un nuevo virus que avanza sin cesar”.
              </p>
              <p>
                Mientras se deslumbraba el titular, la confusión y ansiedad se apoderaba de mí, cuando de repente
                una mujer se acerca a la puerta de ingreso y me invita, para mi sorpresa, a entrar al restaurante.
                Todas las sillas se encontraban boca arriba, a excepción de una mesa donde ella se encontraba sentada
                y alerta informándose del caos mundial. Me ofrecía asiento, e iba en busca de un bocadillo. La miraba,
                y en mi mente pensaba que a pesar de la incertidumbre que traía el mundo, no todo estaba perdido,
                siempre hay una cuota de esperanza en algún rincón. La amabilidad aún prevalece en una cierta parte
                de la población. El individualismo no ha cegado a todos por igual. Colocaba el plato frente a mí, y
                el olor de la comida casera se infiltraba por mi nariz, y me invitaban a centrar todos mis sentidos
                en una tentadora y al fin alcanzable degustación. Era el primer plato decente que comía en años.
                Mientras me atragantaba por la velocidad a la que comía, soñaba con el día en que el alimento fuese
                finalmente un motivo para reunirse a compartir con una extensa y acogedora familia.
              </p>
              <p>
                Ella me preguntaba cómo me llamaba, y qué hacía con mi guitarra. Mientras devoraba, le explicaba que
                mi nombre era Amalia y que mi instrumento era mi mejor acompañante, con quien lograba sobrevivir.
                Ella asentía, y me miraba con ojos de madre. Aquella mirada que extrañaba, que aún sabía reconocer,
                y que traía consigo una dulce preocupación y una pizca de esperanza. Entonces, le preguntaba qué
                estaba sucediendo, por qué las calles estaban desoladas. Mientras se deslizaba una pequeña gota por
                sus pómulos, me enseñaba que “el Coronavirus es una enfermedad infecciosa que está dando vueltas
                alrededor del mundo y afectando a millones de personas”.
              </p>
              <p>
                El virus llevaba un par de semanas quitando vidas y, atemorizadas, las personas se resguardaban en
                sus casas. La mujer que me convidaba el alimento temía que, por su edad, fuera afectada y otra
                víctima más de esta pandemia. Su temor se traslucía en sus palabras, que afirmaban de manera alocada
                que el mundo podría acabar. Me comentaba que no podía dejar su local porque era el único ingreso para
                su familia, pero que caer en la enfermedad implicaría una cadena de contagios interminables, que
                podrían dar fin con su vida, la de sus familiares y círculo cercano.
              </p>
              <p>
                Amablemente le agradecía por su hospitalidad. Me preguntaba a dónde me dirigía, y con la lengua
                entre los dientes le decía que a algo parecido a un hogar. Efectivamente, mi idea era volver a un
                hogar. Mi lugar seguro era ahora el foco de transmisión y aunque me arriesgara a volver a transitar
                por lo vagones, ya no obtendría mis ganancias diarias para poder sobrevivir. Sin embargo, decidida
                a no volver con las manos vacías, le consultaba a la señora si podría tocar una canción para ella…
                quizás, de esta manera, podría recaudar aunque sea unos pesos para evitar el castigo.
              </p>
              <p>
                Dudosamente, ella aceptaba. Tomaba mi guitarra y encendía el parlante. Aclaraba mi voz, y la melodía
                comenzaba a deslizarse por mi boca de una manera fluída y emotiva:
              </p>
              <i>
                De estaciones y vagones,
                Para ustedes mi guitarra y voz,
                Mi regalo es mi historia, quizás despierte su corazón.
                De juegos nunca jugados, aprendiendo a cantar,
                Para ganar unos cuantos pesos, de hombres que vienen y van.
                Mi rumbo, sobrevivir y deleitar,
                Mis manos agradecidas por su atención y dar.
                Cada peso es un bocado, cada mirada la fe,
                De que este subte no es solo mio, sino nuestro cada vez.
                Las ventanas, los reflejos, las miradas, las pisadas,
                Entonada en cada marcha, este circuito no se acaba.
                He nacido, y renazco en cada subida y descenso,
                Mi madre en cada paso con dulce esperanza,
                Amando la música y valorando cada encuentro.
                Es de hombres la maldad pero creo en su verdad,
                Me han quitado su presencia y yo sigo en mi andar.
                Me desgarro y me levanto porque creo en el vivir,
                Que el sufrimiento sea el motor para a ustedes ver sonreir.
              </i>
              <p>
                Cada palabra había provocado un impacto en la mujer, que dejaba caer consigo una lágrima de emoción.
                Me comentaba que tenía claro que la juventud podía enfrentar esta situación y ser los héroes de este
                episodio de la historia. No lo negaba, en mis humildes manos podría estar la solución, a una generación
                que está sintiendo temor.
              </p>
              <p>
                Colocaba la guitarra colgando de mi espalda, y guardaba el parlante en el pequeño bolso que portaba.
                Mientras me retiraba, la mujer sacaba de su cartera un billete de quinientos pesos y me lo entregaba.
                Agradecida, de nuevo, le entregaba una sonrisa, y finalmente abandonaba el lugar. Sabía que cada peso
                debía dárselo a él. A él que, injustamente, me lo quitaba de las manos y lo guardaba en su bolsillo,
                para utilizar vaya uno a saber en qué.
              </p>
              <p>
                Me retiré del restaurante con esperanzas de poder volver a un hogar que no me quitara todo lo que
                había conseguido por mi cuenta, o bien fuera valorado por alguien que me amara, para poder invertir
                en lo que realmente necesitaba y tanto deseaba: un hogar real, en el que pudiera tener lugar para
                conciliar el sueño en la noche, una ducha con agua caliente y un alimento que nutriera el cuerpo
                hambreado que acostumbraba cargar conmigo.
              </p>
              <p>
                Sin embargo, mis sueños se veían frustrados al mismo instante en el que me enfrentaba a él. El
                responsable de tanto sufrimiento. El culpable de mi padecimiento. Mis dolencias. Mis mayores angustias.
                Su cuerpo desfigurado se colocaba en mi misma dirección, y su brazo fortachón tomaba el mío. Lo miraba
                a los ojos, esos ojos llenos de maldad. Me gritaba, y yo, acostumbrada a hacerme la sorda, lo miraba
                con cara de desentendida, pero sabiendo en el fondo que algún día cada acto mal intencionado sería
                vuelto con gracia a mi vida.
              </p>
              <p>
                Después de la liberación que sentía tras cada canto, su presencia cohartaba todo sentimiento positivo
                que había en mí. Dejaba de ser yo por un momento y buscaba en mi profunda respiración el valor para
                enfrentar cada impulso que podía surgir inadvertido de su cuerpo hacia el mío. Su agresión era una
                lamentable costumbre, pero a su vez el único ser que podía asegurarme un pequeño rincón en este mundo
                donde vivir, que no fuese en medio de la calle. Decidía intercambiar los quinientos pesos por mi ración
                de pan diario, para poder conciliar el sueño y no levantarme por la madrugada con el típico crujido de
                estómago vacío.
              </p>
              <p>
                Con el cuerpo apoyado en el cartón y los diarios, cerraba los ojos en búsqueda de algunas respuestas.
                Pensaba, “¿qué sería de mí ahora?”. El subte estaba abandonado, las personas circulaban ahora en sus
                metros cuadrados brindándole color a espacios que antes no tenían vida, mientras para mi, aquel espacio,
                seguía siendo el mismo sitio de siempre. Un sitio de sufrimiento y padecimiento. De maltrato y sometimiento.
                Donde no se pronunciaba la paz, sino la guerra. Una serie de batallas diarias cuya ganadora jamás podría ser yo.
                Mi voz ya no sería escuchada como antes, solo deleitaría a las paredes de baldosas de cerámica dejando un eco
                imperceptible para las muchedumbres que solían oirme. La humanidad ya no serviría a mis plegarias, “¿qué hacer
                ahora para recibir el pan de cada día?, ¿a quién le alegría el viaje con algunas melodías?, ¿quién entendería
                mi situación esta vez?”.
              </p>
              <p>
                Me cuestionaba qué sería de mi mañana, y pasado, y el resto de mis días junto a esta pandemia. Me costaba
                comprender que había una nueva normalidad a la que me debía amoldar. Sin elegirlo, sin pedirlo. Simplemente
                había aparecido, y debía acatar. Lentamente el sueño se apoderaba de mis tristes pensamientos. Mañana sería
                un nuevo día. Una nueva realidad que afrontar. Aún tenía fe en que un intento más no sería en vano, si no era
                para alegrar el día a otro ser humano.
              </p>
              <p>
                Mi voz traería de vuelta la vida al subte, que sin saber su destino, podría llegar a ser un espacio donde
                soñar y encontrar esa deseada paz, que hace cualquier lugar conocido, un hogar.
              </p>
              <p>
                Y mientras me dormía, recordaba la letra que le cantaba a la amable señora, mientras en ella anhelaba los
                ojos de mi madre, que tanto extrañaba.
              </p>
              <i>
                De estaciones y vagones,
                Para ustedes mi guitarra y voz,
                Mi regalo es mi historia, quizás despierte su corazón.
                De juegos nunca jugados, aprendiendo a cantar,
                Para ganar unos cuantos pesos, de hombres que vienen y van.
              </i>
            </HistoriaTexto>
            <Valorar>
              <hr />
              <h4>Valorá el texto</h4>
            </Valorar>
          </Historia>
          <AutorDescripcion>
            <img src='./images/usuario.jpg' alt='UserImage'/>
            <AutorInfo>
              <span>Escrito por:</span>
              <h6>Tatiana Numerosky</h6>
              <p>
                Escribo lo que veo y siento. Observar es el punto de partida 
                para una buena historia. 
              </p>
            </AutorInfo>
            {/* Estrellas */}
          </AutorDescripcion>
          <Accion>
            <Boton href={'lista-historias'} backgroundColor={false} borderColor={true} colorText={true}> Volver a historias </Boton>
          </Accion>
        </Container>
      </Wrapper>
    </ContainerMain>
  );
}

export default HistoriaContainer;