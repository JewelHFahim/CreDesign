import PartnerSlider from "../../../components/partner-slider/PartnerSlider";

const OurPartner = () => {
  return (
    <div className="mt-[50px]">

      <div className="flex justify-center">
        <h1 className="text-[30px] lg:text-[44px] font-medium uppercase">Our Partners</h1>
      </div>

      <div className="py-3 lg:py-5"> <PartnerSlider /> </div>

    </div>
  );
};

export default OurPartner;
