import Button from "../Button/Button";
import Icons from "../Icons/Icons";

const ProgressDialog = ({
  heading,
  subheading
}) => (
  <div className="flex flex-col flex-x-center">
    <h4>{heading}</h4>
    <hr />
    <div>
      <Button
        className='loading'
        disabled={true}
        icon={<Icons type='refresh' />}
        hasText={false}
      />
      <span>{subheading}</span>
    </div>
  </div>
);

export default ProgressDialog;
