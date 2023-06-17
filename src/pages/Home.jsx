import CustomSection from "../components/CustomSection";
import ProjectCard from "../components/cards/ProjectCard";
import MemberCard from "../components/cards/MemberCard";
import ServiceCard from "../components/cards/ServiceCard";
import projects from "../components/cards/Data/projectsData";
import members from "../components/cards/Data/membersData";
import fotoTest from "../images/mudarFoto.png";

function Home() {
  return (
    <>
      <CustomSection
        bgColor="var(--bege)"
        sideTitle="Sobre nós"
        mainTitle="Lorem Ipsum!"
        paragraphArray={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus dui, interdum vel semper eget, euismod vitae metus. In facilisis metus ut tellus vulputate luctus. Mauris nulla dui, finibus eu hendrerit nec, tempor vel nunc. Cras a nisi sit amet velit mollis efficitur. Nullam et nisl ultrices, aliquet neque ut, scelerisque diam. Donec bibendum posuere pulvinar. Aenean sed varius lacus, nec tincidunt odio. Aenean dictum laoreet mattis. Suspendisse potenti. Sed posuere imperdiet massa, nec pretium ipsum tempus varius.',
          'Morbi et cursus quam. Mauris volutpat cursus placerat. Nullam a dui dapibus, fermentum lectus eget, vestibulum nibh. Ut pellentesque aliquet sollicitudin. Quisque luctus risus facilisis ligula efficitur, sit amet commodo ipsum rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat purus in ipsum posuere auctor. Nam ac feugiat nisi. Suspendisse rhoncus egestas fermentum. Quisque tristique tristique justo, venenatis cursus est ornare at. Proin iaculis lectus et nunc finibus, et hendrerit ipsum tristique. Suspendisse fermentum sem urna. Donec et dapibus nibh. Praesent bibendum nunc eget ante pharetra feugiat. Duis eget viverra arcu.'
        ]}
        btnText="Saiba mais"
        sideImg={ fotoTest }
      />
      <CustomSection
        bgColor="var(--section-branca)"
        sideTitle="Sobre nós"
        mainTitle="Lorem Ipsum!"
      />
      {
        projects.map((project) => (
          <ProjectCard
            key={ project.title }
            bgImgSrc={ project.bgImgSrc }
            title={ project.title }
            paragraph={ project.paragraph }
          />
        ))
      }
      <ServiceCard
        faIcon="fa-solid fa-hands-holding-child"
        title="Suporte familiar"
        paragraph="Mauris volutpat cursus placerat. Nullam a dui dapibus, fermentum lectus eget, vestibulum nibh."
      />
      {
        members.map((member) => (
          <MemberCard
            key={ member.nome }
            imgSrc={ member.imgSrc }
            nome={ member.nome }
            role={ member.role }
          />
        ))
      }
    </>
  );
}

export default Home;