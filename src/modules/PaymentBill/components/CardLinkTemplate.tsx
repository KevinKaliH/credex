import { ILink } from "@bill/utils/const";

const CardLinkTemplate = ({ value }: { value: ILink }) => {
  return (
    <div
      className="d-grid shadow-sm rounded-xs bg-white px-3 py-2"
      style={{ width: "220px" }}
    >
      <div
        className="rounded-circle p-4"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: value.fill,
          boxSizing: "content-box",
          justifySelf: "center",
        }}
      >
        <img src={value.icon} className="w-100 h-100" />
      </div>
      <a
        href={value.link}
        className="my-3 btn btn-primary d-block border-0 rounded-pill p-0 text-uppercase fw-semibold"
        role="button"
      >
        Realizar
      </a>
      <p className="text-center text-uppercase fw-semibold fs-6 mb-0">
        {value.label}
      </p>
    </div>
  );
};

export default CardLinkTemplate;
