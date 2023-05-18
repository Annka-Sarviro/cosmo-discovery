const Checkbox = () => {
  return (
    <label htmlFor="checkbox" className="flex items-center">
      <input type="checkbox" name="checkbox" id="checkbox" className="w-6 h-6" />
      <p className="ml-2"> Click in the box &ldquo;I agree to the terms and conditions&ldquo;.</p>
    </label>
  );
};

export default Checkbox;
