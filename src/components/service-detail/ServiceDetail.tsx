import './ServiceDetail.css'
type Dictionary<T> = {
    [key: string]: T;
};

const ServiceDetail = ({data}: {data: Dictionary<string>}) => {
  return (
      <div className="service-page">
          <div className="service-card">
              <div className="service-card__image-container">
                  <img
                      src={data.image}
                      alt="Service Image"
                      className="service-card__image"
                  />
              </div>
              <div className="service-card__content">
                  <h1 className="service-card__title">{data.name}</h1>
                  <p className="service-card__description">
                      {data.description}
                  </p>
              </div>
          </div>
      </div>

  )
}
export default ServiceDetail