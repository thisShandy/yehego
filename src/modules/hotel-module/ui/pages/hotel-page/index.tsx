import MainLayout from "~/common/ui/layouts/main-layout";
import ContainerLayout from "~/common/ui/layouts/container-layout";

import light from "./style/light.module.scss";

const HotelPage = () => {
  return (
    <MainLayout>
      <ContainerLayout>
        <div className={light.hotelContainer}>
          <div className={light.hotelData}>
            <div />
            <div>
              <span>Rooms</span>
            </div>
          </div>
          <div className={light.hotelInfo}>
            <div className={light.infoPhoto}>
              <span className={light.photoTitle}>Photos</span>
              <div className={light.photoData}>
                <img
                  className={light.dataImage}
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="room_photo"
                />
                <img
                  className={light.dataImage}
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="room_photo"
                />
                <img
                  className={light.dataImage}
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="room_photo"
                />
              </div>
            </div>
            <div className={light.infoAbout}>
              <span className={light.aboutTitle}>About</span>
              <span className={light.aboutDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consectetur eos expedita obcaecati
                quisquam quod recusandae reprehenderit. Aperiam architecto aspernatur blanditiis cum dolor doloremque,
                esse exercitationem explicabo facere facilis illo illum incidunt maiores minima minus molestias nam nisi
                officiis praesentium qui quisquam sit veniam.
              </span>
            </div>
            <div className={light.infoLocation}>
              <span className={light.locationTitle}>Location</span>
              <div className={light.locationMap}>
                <span>Map will be here</span>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};

export default HotelPage;
