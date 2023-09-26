"use client";
import TableOfContent from "@/components/course/TableOfContent";
import { Container } from "@/components/shared/Wrapper";
import { useState } from "react";

const Course = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [currentContentLessonIndex, setCurrentContentLessonIndex] = useState(0);

  const course = [
    {
      lessonTitle: "Introduction to Programing",
      lessons: ["Arrays", "Sorting", "Lists", "Binary"],
    },
    {
      lessonTitle: "Introduction to Javascript",
      lessons: ["Arrays", "Sorting", "Lists", "Binary"],
    },
    {
      lessonTitle: "Introduction to React",
      lessons: ["Arrays", "Sorting", "Lists", "Binary"],
    },
  ];

  return (
    <Container className="mt-24">
      <div className="md:w-3/4 mx-auto">
        <TableOfContent
          course={course}
          setCurrentContentIndex={setCurrentContentIndex}
          setCurrentContentLessonIndex={setCurrentContentLessonIndex}
        />
        <div className="mt-4">
          <h2 className="text-xl pb-4">
            {course[currentContentIndex].lessonTitle}
          </h2>
          <h4>
            {course[currentContentIndex].lessons[currentContentLessonIndex]}
          </h4>
          {/* <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante
            metus dictum at tempor commodo ullamcorper a lacus vestibulum.
            Phasellus faucibus scelerisque eleifend donec pretium vulputate.
            Nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque varius
            morbi enim nunc faucibus. Iaculis at erat pellentesque adipiscing.
            Malesuada fames ac turpis egestas. Tortor consequat id porta nibh
            venenatis cras sed. Orci nulla pellentesque dignissim enim. Fames ac
            turpis egestas sed tempus urna et pharetra. Feugiat nibh sed
            pulvinar proin gravida hendrerit. A arcu cursus vitae congue mauris
            rhoncus aenean vel elit. A scelerisque purus semper eget. Imperdiet
            massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Orci ac
            auctor augue mauris augue neque gravida. Vel quam elementum pulvinar
            etiam non quam. Quis viverra nibh cras pulvinar mattis nunc sed
            blandit libero. Ut morbi tincidunt augue interdum velit euismod in
            pellentesque. Vulputate sapien nec sagittis aliquam malesuada
            bibendum arcu. Elementum curabitur vitae nunc sed velit dignissim.
            Feugiat nisl pretium fusce id velit ut tortor pretium. Ut morbi
            tincidunt augue interdum velit euismod. Pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
            Sed enim ut sem viverra aliquet eget sit amet. Morbi quis commodo
            odio aenean sed adipiscing. Scelerisque eu ultrices vitae auctor eu
            augue ut. Ut pharetra sit amet aliquam id diam maecenas ultricies.
            Vel fringilla est ullamcorper eget nulla facilisi etiam. Ac ut
            consequat semper viverra nam libero justo. Nec feugiat nisl pretium
            fusce id velit ut tortor. Tincidunt lobortis feugiat vivamus at
            augue eget arcu. Et sollicitudin ac orci phasellus. Vel orci porta
            non pulvinar neque laoreet. Orci sagittis eu volutpat odio
            facilisis. Scelerisque felis imperdiet proin fermentum leo vel orci.
            Ut morbi tincidunt augue interdum velit euismod in. Etiam erat velit
            scelerisque in dictum non consectetur a erat. Consequat nisl vel
            pretium lectus quam id leo in. Suscipit tellus mauris a diam
            maecenas sed enim. Nibh tellus molestie nunc non blandit massa enim
            nec. Egestas purus viverra accumsan in nisl. Ac orci phasellus
            egestas tellus rutrum tellus pellentesque eu. Vulputate ut pharetra
            sit amet aliquam. Enim nunc faucibus a pellentesque sit amet
            porttitor eget. Ut diam quam nulla porttitor massa id neque aliquam.
            Amet nisl suscipit adipiscing bibendum est ultricies integer quis.
            Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Enim
            praesent elementum facilisis leo. Lacus viverra vitae congue eu.
            Tincidunt arcu non sodales neque sodales ut etiam sit. Libero justo
            laoreet sit amet cursus. Vestibulum rhoncus est pellentesque elit.
            Orci ac auctor augue mauris augue neque gravida. Ipsum dolor sit
            amet consectetur adipiscing elit pellentesque. Amet facilisis magna
            etiam tempor orci eu. Enim neque volutpat ac tincidunt. Nec feugiat
            in fermentum posuere urna nec tincidunt praesent semper. Sed lectus
            vestibulum mattis ullamcorper velit sed. Ultricies tristique nulla
            aliquet enim tortor at auctor urna. Faucibus et molestie ac feugiat
            sed lectus. Posuere morbi leo urna molestie at elementum eu
            facilisis. Egestas maecenas pharetra convallis posuere morbi. Sit
            amet consectetur adipiscing elit duis. Consectetur a erat nam at
            lectus urna duis convallis convallis. Tortor at risus viverra
            adipiscing. Sodales ut etiam sit amet nisl. Nunc non blandit massa
            enim. Amet consectetur adipiscing elit duis tristique sollicitudin
            nibh sit. Ac tortor vitae purus faucibus ornare suspendisse sed nisi
            lacus. Facilisis leo vel fringilla est ullamcorper eget nulla
            facilisi etiam. Auctor elit sed vulputate mi sit amet mauris. Id
            volutpat lacus laoreet non curabitur. Molestie a iaculis at erat
            pellentesque adipiscing. Rhoncus dolor purus non enim praesent. Nisi
            scelerisque eu ultrices vitae auctor eu augue ut. Sagittis aliquam
            malesuada bibendum arcu vitae elementum. Leo integer malesuada nunc
            vel risus. Quis imperdiet massa tincidunt nunc pulvinar sapien et
            ligula ullamcorper. Lobortis elementum nibh tellus molestie nunc non
            blandit. Duis ultricies lacus sed turpis tincidunt. Dui faucibus in
            ornare quam viverra orci. Odio tempor orci dapibus ultrices in
            iaculis nunc sed augue. Sit amet justo donec enim diam vulputate.
            Vitae tempus quam pellentesque nec nam aliquam. Tortor at risus
            viverra adipiscing at in tellus integer feugiat. Ut aliquam purus
            sit amet luctus venenatis lectus magna fringilla. Faucibus pulvinar
            elementum integer enim neque volutpat ac tincidunt. Risus commodo
            viverra maecenas accumsan lacus vel facilisis volutpat est.
            Suspendisse interdum consectetur libero id faucibus nisl. Urna et
            pharetra pharetra massa massa ultricies mi. Ullamcorper velit sed
            ullamcorper morbi tincidunt ornare massa eget egestas. Sed
            adipiscing diam donec adipiscing tristique risus. Quis viverra nibh
            cras pulvinar mattis nunc sed. Tortor dignissim convallis aenean et
            tortor at risus viverra. Dolor purus non enim praesent elementum
            facilisis leo. Vulputate ut pharetra sit amet aliquam id diam. Est
            pellentesque elit ullamcorper dignissim cras. Arcu odio ut sem
            nulla. Orci nulla pellentesque dignissim enim sit amet. Faucibus
            turpis in eu mi bibendum neque. Nulla at volutpat diam ut. At urna
            condimentum mattis pellentesque. Est velit egestas dui id ornare
            arcu odio ut sem. Ridiculus mus mauris vitae ultricies leo. Eget
            dolor morbi non arcu risus quis. Mauris pellentesque pulvinar
            pellentesque habitant morbi tristique senectus. Pellentesque
            dignissim enim sit amet venenatis urna cursus eget nunc. Amet
            porttitor eget dolor morbi. Pharetra et ultrices neque ornare.
            Pretium lectus quam id leo in. Egestas erat imperdiet sed euismod.
            Nibh sit amet commodo nulla facilisi nullam vehicula. At imperdiet
            dui accumsan sit amet nulla facilisi morbi. Sed ullamcorper morbi
            tincidunt ornare massa eget egestas purus. Odio facilisis mauris sit
            amet. Mattis enim ut tellus elementum sagittis vitae et leo duis.
            Pharetra et ultrices neque ornare aenean euismod elementum nisi
            quis. Fermentum dui faucibus in ornare quam viverra. In nulla
            posuere sollicitudin aliquam ultrices sagittis. Et magnis dis
            parturient montes nascetur. Non sodales neque sodales ut etiam. Sed
            risus ultricies tristique nulla. Vitae tempus quam pellentesque nec
            nam aliquam. Fringilla est ullamcorper eget nulla facilisi etiam
            dignissim. Eu non diam phasellus vestibulum lorem sed risus
            ultricies. Lacus sed turpis tincidunt id aliquet. Eget nunc lobortis
            mattis aliquam. Consectetur a erat nam at lectus urna. Eget egestas
            purus viverra accumsan in. Commodo sed egestas egestas fringilla
            phasellus faucibus scelerisque. Nibh mauris cursus mattis molestie
            a. Pellentesque dignissim enim sit amet. Tellus in metus vulputate
            eu scelerisque felis imperdiet proin fermentum. Feugiat nisl pretium
            fusce id velit ut. Ac odio tempor orci dapibus ultrices in. Blandit
            libero volutpat sed cras. Felis eget nunc lobortis mattis aliquam.
            Ornare arcu odio ut sem nulla pharetra. Egestas erat imperdiet sed
            euismod nisi. In hac habitasse platea dictumst quisque. Aenean sed
            adipiscing diam donec adipiscing tristique risus nec. Quisque
            sagittis purus sit amet. Orci eu lobortis elementum nibh tellus
            molestie nunc. Quam id leo in vitae turpis massa. Risus nec feugiat
            in fermentum posuere urna. Gravida neque convallis a cras semper.
            Fermentum posuere urna nec tincidunt praesent semper feugiat nibh
            sed. Faucibus a pellentesque sit amet porttitor. Donec enim diam
            vulputate ut pharetra. Faucibus nisl tincidunt eget nullam non nisi
            est. Commodo odio aenean sed adipiscing diam donec adipiscing.
            Mauris pellentesque pulvinar pellentesque habitant morbi tristique.
            Imperdiet massa tincidunt nunc pulvinar. Sit amet est placerat in.
            Eget felis eget nunc lobortis. Placerat duis ultricies lacus sed
            turpis tincidunt id aliquet. Montes nascetur ridiculus mus mauris
            vitae ultricies leo integer malesuada. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam. Curabitur vitae nunc sed
            velit dignissim sodales. Feugiat vivamus at augue eget arcu dictum
            varius duis. Lectus arcu bibendum at varius vel pharetra. Nulla
            pellentesque dignissim enim sit amet venenatis. Neque laoreet
            suspendisse interdum consectetur. Id cursus metus aliquam eleifend
            mi. Sem nulla pharetra diam sit amet nisl suscipit adipiscing
            bibendum. Quis lectus nulla at volutpat diam ut. Mauris vitae
            ultricies leo integer malesuada nunc vel risus. Vitae semper quis
            lectus nulla at volutpat diam ut venenatis. Aliquam eleifend mi in
            nulla posuere sollicitudin. Porttitor eget dolor morbi non arcu. Ut
            porttitor leo a diam. Felis imperdiet proin fermentum leo vel orci
            porta. Neque laoreet suspendisse interdum consectetur libero id
            faucibus nisl. Bibendum neque egestas congue quisque egestas. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
            In hac habitasse platea dictumst vestibulum. Fringilla phasellus
            faucibus scelerisque eleifend donec. Aliquam vestibulum morbi
            blandit cursus risus at ultrices mi tempus. Mus mauris vitae
            ultricies leo integer malesuada nunc vel. Urna neque viverra justo
            nec ultrices dui. Id ornare arcu odio ut sem nulla. Integer quis
            auctor elit sed vulputate mi sit. Gravida arcu ac tortor dignissim
            convallis. Eget mi proin sed libero enim sed. Nisi scelerisque eu
            ultrices vitae auctor. Risus at ultrices mi tempus imperdiet nulla
            malesuada. Mauris in aliquam sem fringilla ut morbi. Enim sed
            faucibus turpis in eu mi bibendum neque egestas. Sit amet mattis
            vulputate enim nulla aliquet porttitor. Porta nibh venenatis cras
            sed felis. Mi quis hendrerit dolor magna eget est lorem ipsum. Eget
            nunc lobortis mattis aliquam faucibus purus in. Eu scelerisque felis
            imperdiet proin fermentum leo vel. Ullamcorper sit amet risus nullam
            eget felis. A diam maecenas sed enim ut sem viverra. Posuere morbi
            leo urna molestie at. Condimentum id venenatis a condimentum vitae
            sapien pellentesque habitant. Cursus euismod quis viverra nibh cras
            pulvinar. Nam at lectus urna duis. Donec pretium vulputate sapien
            nec sagittis aliquam malesuada bibendum arcu. Mauris vitae ultricies
            leo integer malesuada nunc vel risus. Adipiscing at in tellus
            integer feugiat scelerisque. Elementum integer enim neque volutpat
            ac tincidunt vitae. Ultrices dui sapien eget mi proin sed. Tellus in
            hac habitasse platea dictumst vestibulum rhoncus. Nec dui nunc
            mattis enim ut tellus elementum sagittis vitae. Est placerat in
            egestas erat imperdiet sed. Iaculis at erat pellentesque adipiscing
            commodo. Tempus urna et pharetra pharetra massa massa ultricies mi
            quis. Adipiscing enim eu turpis egestas pretium aenean pharetra.
            Purus ut faucibus pulvinar elementum. Ut consequat semper viverra
            nam libero justo laoreet sit. Libero id faucibus nisl tincidunt eget
            nullam non nisi est. Risus in hendrerit gravida rutrum quisque non
            tellus orci. Pellentesque id nibh tortor id. Volutpat sed cras
            ornare arcu dui vivamus arcu felis bibendum. Tortor condimentum
            lacinia quis vel eros. Rhoncus est pellentesque elit ullamcorper
            dignissim cras tincidunt. Duis convallis convallis tellus id
            interdum velit laoreet. Molestie a iaculis at erat pellentesque
            adipiscing. Porttitor rhoncus dolor purus non. Nulla aliquet
            porttitor lacus luctus accumsan. Convallis tellus id interdum velit
            laoreet id donec ultrices tincidunt. Varius duis at consectetur
            lorem donec. Aliquam etiam erat velit scelerisque in dictum non
            consectetur a. Aenean sed adipiscing diam donec adipiscing. Ipsum a
            arcu cursus vitae congue mauris. In ante metus dictum at tempor
            commodo. Ut venenatis tellus in metus vulputate eu scelerisque
            felis. Amet est placerat in egestas erat imperdiet sed. Et netus et
            malesuada fames ac. Id faucibus nisl tincidunt eget nullam non.
            Purus semper eget duis at tellus at. Lectus mauris ultrices eros in
            cursus turpis massa. Sagittis id consectetur purus ut faucibus
            pulvinar elementum integer enim. Ullamcorper sit amet risus nullam
            eget felis eget. Urna nunc id cursus metus aliquam eleifend. Semper
            viverra nam libero justo laoreet sit amet cursus. Ut morbi tincidunt
            augue interdum velit euismod. Elementum integer enim neque volutpat
            ac tincidunt vitae semper. Nisl tincidunt eget nullam non nisi est
            sit amet facilisis. Justo eget magna fermentum iaculis eu non diam.
            Adipiscing at in tellus integer. Auctor urna nunc id cursus metus
            aliquam eleifend mi in. Id volutpat lacus laoreet non. Sed
            adipiscing diam donec adipiscing tristique. Cursus risus at ultrices
            mi tempus imperdiet nulla malesuada. Bibendum ut tristique et
            egestas quis. Malesuada bibendum arcu vitae elementum curabitur
            vitae nunc. Consequat semper viverra nam libero. Nulla at volutpat
            diam ut venenatis tellus in. Risus nec feugiat in fermentum posuere
            urna nec tincidunt. Ut porttitor leo a diam sollicitudin tempor id
            eu. Tellus mauris a diam maecenas sed enim ut sem. Feugiat sed
            lectus vestibulum mattis. Ante in nibh mauris cursus. Senectus et
            netus et malesuada fames ac. Ut porttitor leo a diam sollicitudin
            tempor id. Pulvinar neque laoreet suspendisse interdum consectetur
            libero. In fermentum posuere urna nec tincidunt praesent semper
            feugiat. Vestibulum morbi blandit cursus risus at. Amet facilisis
            magna etiam tempor. Pellentesque habitant morbi tristique senectus
            et netus et malesuada. Nibh tortor id aliquet lectus proin nibh.
            Ullamcorper dignissim cras tincidunt lobortis. Viverra maecenas
            accumsan lacus vel facilisis. Id nibh tortor id aliquet lectus proin
            nibh. Est placerat in egestas erat imperdiet sed euismod nisi porta.
            Nec ullamcorper sit amet risus nullam eget felis eget. Ac placerat
            vestibulum lectus mauris ultrices. Tellus integer feugiat
            scelerisque varius morbi enim. Nunc congue nisi vitae suscipit
            tellus mauris a diam maecenas. Enim eu turpis egestas pretium aenean
            pharetra magna ac. Pretium fusce id velit ut tortor pretium viverra
            suspendisse potenti. Nisl tincidunt eget nullam non nisi. Augue eget
            arcu dictum varius duis at consectetur lorem. Aliquam vestibulum
            morbi blandit cursus risus at ultrices. Sed arcu non odio euismod
            lacinia at. Elementum nisi quis eleifend quam. Nulla malesuada
            pellentesque elit eget gravida cum sociis natoque. Faucibus
            scelerisque eleifend donec pretium vulputate sapien nec. Est lorem
            ipsum dolor sit. Sed faucibus turpis in eu. Turpis massa tincidunt
            dui ut ornare lectus. Tincidunt id aliquet risus feugiat in ante
            metus dictum at. Mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque pulvinar. Aliquam vestibulum morbi blandit cursus risus
            at ultrices. Pellentesque elit ullamcorper dignissim cras tincidunt
            lobortis feugiat vivamus at. Et netus et malesuada fames ac turpis.
            Eleifend quam adipiscing vitae proin. Sed arcu non odio euismod
            lacinia. Sed vulputate odio ut enim. Platea dictumst vestibulum
            rhoncus est pellentesque elit. Ultrices dui sapien eget mi proin sed
            libero enim sed.
          </p> */}
          <div className="flex justify-between">
            <button
              onClick={() => {
                const prevContentIndex = currentContentIndex - 1;
                const prevContentLessonIndex = currentContentLessonIndex - 1;

                if (prevContentIndex >= 0 && prevContentLessonIndex + 1 === 0) {
                  setCurrentContentIndex(prevContentIndex);
                  setCurrentContentLessonIndex(
                    course[prevContentIndex].lessons.length - 1,
                  );
                } else if (prevContentLessonIndex >= 0) {
                  setCurrentContentLessonIndex(prevContentLessonIndex);
                }
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                const nextContentIndex = currentContentIndex + 1;
                const nextContentLessonIndex = currentContentLessonIndex + 1;
                const contentCourseLength =
                  course[currentContentIndex].lessons.length;
                console.log(currentContentIndex, currentContentLessonIndex);
                if (
                  nextContentIndex < course.length &&
                  nextContentLessonIndex - 1 === contentCourseLength - 1
                ) {
                  setCurrentContentIndex(nextContentIndex);
                  setCurrentContentLessonIndex(0);
                } else if (
                  nextContentLessonIndex <
                  course[nextContentIndex - 1].lessons.length
                ) {
                  setCurrentContentLessonIndex(nextContentLessonIndex);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Course;
