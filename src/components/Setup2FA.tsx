import { Button } from "./ui/button";

const Setup2FA = (props: { qrCodeUrl: string; switchForm: () => void }) => {
  const { qrCodeUrl, switchForm } = props;

  return (
    <div className="p-4">
      <img src={qrCodeUrl} alt="scan QRCode for auth" />
      <Button onClick={switchForm}>press here when QR code scanned</Button>
    </div>
  );
};

export default Setup2FA;
