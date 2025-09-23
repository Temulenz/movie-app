export function Footer() {
  return (
    <div className="flex justify-center w-360 mt-[51px] bg-indigo-700">
      <div className="ml-[80px] mt-10">
        <img src="/film2.svg" />
        <h4>© 2024 Movie Z. All Rights Reserved. </h4>
      </div>

      <div className="ml-[498px] mr-[96px] mt-10">
        <h6>Contact Information</h6>
        <div className="flex gap-3 mt-3 mb-6">
          <img src="/email.svg" />
          <div>
            <h4>Email:</h4>
            <h6>support@movieZ.com</h6>
          </div>
        </div>
        <div className="flex gap-3">
          <img src="/phone.svg" />
          <div>
            <h4>Phone:</h4>
            <h6>+976 (11) 123-4567</h6>
          </div>
        </div>
      </div>

      <div className="mt-10 mr-20">
        <h4>Follow us </h4>
        <div className="flex gap-3">
          <h6>Facebook</h6>
          <h6>Instagram</h6>
          <h6>Twitter</h6>
          <h6>Youtube</h6>
        </div>
      </div>
    </div>
  );
}
