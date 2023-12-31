import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { Container } from "./styles";
import { PageHandler } from "@/interfaces";

export default function Pagination({ handlePrev, handleNext }: PageHandler) {
  return (
    <Container>
      <button onClick={handlePrev}>
        <CaretCircleLeft size={32} color="#00875f" />
      </button>
      <button onClick={handleNext}>
        <CaretCircleRight size={32} color="#00875f" />
      </button>
    </Container>
  );
}
