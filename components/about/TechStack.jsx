import Image from "next/image";
import reactIcon from "../../public/assets/icons/react.png";
import flutterIcon from "../../public/assets/icons/flutter.png";
import laravelIcon from "../../public/assets/icons/laravel.png";
import phpIcon from "../../public/assets/icons/php.png";
import pythonIcon from "../../public/assets/icons/python.png";
import angularIcon from "../../public/assets/icons/angular.png";
import react_nativeIcon from "../../public/assets/icons/react_native.png";
import androidIcon from "../../public/assets/icons/android_native.png";

export default function TechStack() {
  return (
    <div className="container-fluid padding">
      <div className="row text-center text-md-start">
        <h2 className="text__text1">Tech Stack</h2>
      </div>
      <div className="row mt-5  d-flex align-items-center text-center text-md-start">
        <div className="col d-flex flex-column  align-items-center">
          <Image src={reactIcon} alt="icon" />
          <h5 className="text__text1 pt-5 text-center">React</h5>
        </div>
        <div className="col d-flex flex-column  align-items-center">
          <Image src={flutterIcon} alt="icon" />
          <h5 className="text__text1 pt-5 text-center">Flutter</h5>
        </div>
        <div className="col d-flex flex-column  align-items-center">
          <Image src={laravelIcon} alt="icon" />
          <h5 className="text__text1 pt-5 text-center">Laravel</h5>
        </div>
        <div className="col d-flex flex-column  align-items-center">
          <Image src={phpIcon} alt="icon" />
          <h5 className="text__text1 pt-5 text-center">PHP</h5>
        </div>
        <div className="col d-flex flex-column  align-items-center">
          <Image src={pythonIcon} alt="icon" />
          <h5 className="text__text1 pt-5 text-center">Python</h5>
        </div>
        <div className="col d-flex flex-column  align-items-center">
          <Image src={angularIcon} alt="icon" />
          <h5 className="text__text1 pt-5 text-center">Angular</h5>
        </div>
        <div className="col d-flex flex-column  align-items-center">
          <Image src={react_nativeIcon} alt="icon" />
          <h5 className="text__text1 pt-5 text-center">React Native</h5>
        </div>
        <div className="col d-flex flex-column  align-items-center">
          <Image src={androidIcon} alt="icon" />
          <h5 className="text__text1 pt-5 text-center">Android Native</h5>
        </div>
      </div>
    </div>
  );
}
