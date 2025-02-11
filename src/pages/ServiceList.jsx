import Services from "./Services";

export default function ServiceList() {
  return (
    <>
      <Services
        title="New Connection"
        details="We offer new connection for homes and commercial."
      ></Services>
      <Services
        title="Existing Issues"
        details="We provide the support to existing cylinder problems"
      />
      <Services title="Online booking" details="Doorstep Delivery" />
    </>
  );
}
