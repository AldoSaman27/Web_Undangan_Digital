import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { Container, Button, Form, FloatingLabel } from "react-bootstrap";
import {
  Calendar3,
  Clock,
  GeoAltFill,
  Gift,
  Heart,
} from "react-bootstrap-icons";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
// Components
import Gallery from "./Components/Gallery";
import CountdownTimer from "./Components/CountdownTimer";
// Image
import Reinhart_Paquale from "./Assets/Img/Reinhart_Paquale.jpeg";
import Jessica_Elleora from "./Assets/Img/Jessica_Elleora.jpg";

function App() {
  const [paramValue, setParamValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const urlParts = window.location.pathname.split("/");
    const valueParam = decodeURIComponent(urlParts[1]);
    setParamValue(valueParam);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    document.body.style.overflow = "visible";
    myRef.current.scrollIntoView({ behavior: "smooth" });
    return 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const namaValue = formData.get("Nama");
    const ucapanValue = formData.get("Ucapan");
    const konfirmasiValue = formData.get("Konfirmasi");

    if (
      namaValue === "" ||
      namaValue.length === 0 ||
      namaValue === null ||
      namaValue === undefined
    ) {
      return alert("Masukkan Nama Anda!");
    } else if (
      ucapanValue === "" ||
      ucapanValue.length === 0 ||
      ucapanValue === null ||
      ucapanValue === undefined
    ) {
      return alert("Masukkan Ucapan & Doa!");
    } else if (
      konfirmasiValue === "" ||
      konfirmasiValue === null ||
      konfirmasiValue === undefined
    ) {
      return alert("Konfirmasi Kehadiran Anda!");
    }

    setIsLoading(true);

    fetch(
      `https://script.google.com/macros/s/${process.env.REACT_APP_API_KEY}/exec`,
      { method: "POST", body: formData }
    )
      .then((response) => {
        // console.log("Success!", response);
        form.reset();
        setIsLoading(false);
        alert("Terima Kasih, Ucapan & Doa Anda telah terkirim!");
      })
      .catch((error) => {
        // console.error("Error!", error);
        setIsLoading(false);
        alert("Terjadi kesalahan, silahkan coba lagi!");
      });

    return 1;
  };

  return (
    <>
      <section id="hero" className="hero">
        <main className="d-flex flex-column align-items-center justify-content-center">
          <h4 data-aos="fade-up" data-aos-duration="1500">
            Undangan Pernikahan
          </h4>
          <h1 data-aos="fade-up" data-aos-duration="1600">
            Reinhart Paquale & Jessica Elleora
          </h1>
          <p data-aos="fade-up" data-aos-duration="1700">
            Kepada Bapak / Ibu / Saudara/i
          </p>
          <p data-aos="fade-up" data-aos-duration="1800">
            {paramValue}
          </p>
          <p data-aos="fade-up" data-aos-duration="1900">
            Kami mengundang Anda dengan Hormat ke Pernikahan Kami
          </p>
          <ReactPlayer
            url="/assets/audio/[MV] Rapsodi - JKT48.mp3"
            playing={isPlaying}
            loop={true}
            style={{ display: "none" }}
          />
          <Button
            data-aos="fade-up"
            data-aos-duration="2000"
            className="btn-lg mt-4"
            onClick={handlePlay}
          >
            Lihat Undangan
          </Button>
        </main>
      </section>

      <section id="mempelai" className="mempelai" ref={myRef}>
        <Container>
          <h1 data-aos="fade-up" data-aos-duration="1500">
            Mempelai
          </h1>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
              <div
                className="mempelai-foto"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <img src={Reinhart_Paquale} alt="" />
              </div>
              <h2 data-aos="fade-up" data-aos-duration="1700">
                Reinhart Paquale
              </h2>
              <p data-aos="fade-up" data-aos-duration="1800">
                Putra dari Bapak Lorem <br /> dan Ibu Ipsum
              </p>
            </div>
            <div className="col-lg-3 d-flex flex-column align-items-center justify-content-center">
              <h1 data-aos="fade-up" data-aos-duration="1600">
                &
              </h1>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
              <div
                className="mempelai-foto"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <img src={Jessica_Elleora} alt="" />
              </div>
              <h2 data-aos="fade-up" data-aos-duration="1700">
                Jessica Elleora
              </h2>
              <p data-aos="fade-up" data-aos-duration="1800">
                Putri dari Bapak Lorem <br /> dan Ibu Ipsum
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="informasi-acara" className="informasi-acara">
        <Container>
          <h1 data-aos="fade-up" data-aos-duration="1500">
            Informasi Acara
          </h1>
          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <div
                className="informasi-card"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <h2>Akad</h2>
                <div className="row">
                  <div className="col">
                    <Clock size={35} />
                    <p>08:00 WITA - 10:00 WITA</p>
                  </div>
                  <div className="col">
                    <Calendar3 size={35} />
                    <p>
                      Rabu,
                      <br />
                      27 Maret 2024
                    </p>
                  </div>
                </div>
                <GeoAltFill size={20} />
                <p>
                  Gorontalo Convention Center, <br /> Jl. Drs. Achmad
                  Nadjamuddin No.35, Limba U Dua, Kota Sel., Kota Gorontalo,
                  Gorontalo 96138
                </p>
                <a
                  href="https://maps.app.goo.gl/gVGkXdnNHuvt58fs8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-sm mb-3"
                >
                  Buka Maps
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div
                className="informasi-card"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <h2>Resepsi</h2>
                <div className="row">
                  <div className="col">
                    <Clock size={35} />
                    <p>08:00 WITA - Selesai</p>
                  </div>
                  <div className="col">
                    <Calendar3 size={35} />
                    <p>
                      Rabu,
                      <br />
                      27 Maret 2024
                    </p>
                  </div>
                </div>
                <GeoAltFill size={20} />
                <p>
                  Gorontalo Convention Center, <br /> Jl. Drs. Achmad
                  Nadjamuddin No.35, Limba U Dua, Kota Sel., Kota Gorontalo,
                  Gorontalo 96138
                </p>
                <a
                  href="https://maps.app.goo.gl/gVGkXdnNHuvt58fs8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-sm mb-3"
                >
                  Buka Maps
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CountdownTimer targetDate="2024-03-27T00:00:00" />

      <section id="gallery" className="gallery">
        <Container>
          <span data-aos="fade-up" data-aos-duration="1500">
            Memory Kisah Kami
          </span>
          <h1 data-aos="fade-up" data-aos-duration="1600">
            Gallery
          </h1>

          <Gallery />
        </Container>
      </section>

      <section id="rsvp" className="rsvp">
        <Container>
          <span data-aos="fade-up" data-aos-duration="1500">
            Kirimkan Pesan
          </span>
          <h1 data-aos="fade-up" data-aos-duration="1500">
            Untuk Kedua Mempelai
          </h1>

          <Form
            method="POST"
            onSubmit={handleSubmit}
            className="mb-5"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <FloatingLabel
              className="mb-4"
              controlId="floatingName"
              label="Name"
            >
              <Form.Control type="text" placeholder="Name" name="Nama" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-4"
              controlId="floatingTextarea"
              label="Ucapan & Doa"
            >
              <Form.Control
                as="textarea"
                placeholder="Ucapan & Doa"
                name="Ucapan"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Form.Select
              className="mb-4"
              aria-label="Floating label select example"
              name="Konfirmasi"
            >
              <option disabled selected>
                Konfirmasi Kehadiran
              </option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </Form.Select>
            <Button type="submit" className="btn-light" disabled={isLoading}>
              {isLoading ? "Loading..." : "Kirim"}
            </Button>
          </Form>
          <h4 className="mb-5" data-aos="fade-up" data-aos-duration="1500">
            Hope to see you soon, Stay safe and healthy!
          </h4>
          <div
            className="d-flex flex-row align-items-center justify-content-center w-100"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <hr color="white" style={{ width: "50%", height: "2.5px" }} />
            <Heart color="white" size={20} className="ms-3 me-3" />
            <hr color="white" style={{ width: "50%", height: "2.5px" }} />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <Gift
              className="mt-5 mb-4"
              size={45}
              style={{ color: "var(--bg-pink)" }}
            />
          </div>
          <h1 data-aos="fade-up" data-aos-duration="1500">
            Kirim Hadiah
          </h1>
          <div className="row mb-5" data-aos="fade-up" data-aos-duration="1500">
            <div className="col">
              <div className="card-hadiah">
                <div className="card-hadiah-header">
                  <img src="/assets/image/logo/gopay.png" alt="" />
                </div>
                <div className="card-hadiah-body">
                  <h6>1234 5678 9xxx</h6>
                  <p>a.n Aldo Saman</p>
                </div>
              </div>
            </div>
          </div>
          <section>
            <p>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
              apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa
              restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami
              ucapkan terima kasih.
            </p>
            <h6>Sampai Jumpa di Hari Bahagia Kami,</h6>
            <h1>Reinhart & Jessica</h1>
          </section>
        </Container>
      </section>
    </>
  );
}

export default App;
