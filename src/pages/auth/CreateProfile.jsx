import React, { useState } from "react";
import { Label } from "../../components/common/Label";
import { Input } from "../../components/common/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/common/Button";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FormField = ({
  label,
  placeholder,
  name,
  register,
  errors,
  requiredMessage,
}) => (
  <div className="flex flex-col gap-1 w-full">
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      placeholder={placeholder}
      {...register(name, { required: requiredMessage })}
    />
    {errors[name] && (
      <span className="text-red-500 text-sm">{errors[name]?.message}</span>
    )}
  </div>
);

const CreateProfile = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  let navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    navigate("/dashboard")
    
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  // Handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-11/12 h-full">
        <div className="bg-white w-3/4 h-11/12 border border-zinc-100 shadow rounded-md p-6 flex justify-between">
          <div className="w-1/3 h-fit">
            <div className="w-full flex flex-col gap-4 h-full">
              <div className="flex flex-col w-full gap-1">
                <div
                  className="flex items-center justify-center border-dashed border-2 border-gray-300 rounded-xl p-1.5 cursor-pointer w-full h-full min-h-96 bg-gray-50"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {imagePreview ? (
                    <div className="relative w-full h-full">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="object-cover w-full h-full rounded-lg"
                      />
                      <button
                        onClick={() => {
                          setImage(null);
                          setImagePreview(null);
                        }}
                        className="absolute top-2 right-2 text-white bg-rose-700 p-1.5 rounded-full cursor-pointer"
                      >
                        <IoCloseOutline className="text-base" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <p>Drag & Drop an image here</p>
                      <p>or</p>
                      <label className="text-blue-500 cursor-pointer">
                        Click to Select
                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-center justify-center gap-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-11/12 flex flex-col gap-4"
            >
              {/* Skills Section */}
              <div className="flex flex-col gap-6">
                <FormField
                  label="Skills"
                  placeholder="Enter your skills"
                  name="skills"
                  register={register}
                  errors={errors}
                  requiredMessage="Skills are required"
                />
              </div>

              {/* Education Section */}
              <div className="flex flex-col gap-6">
                <FormField
                  label="College Name"
                  placeholder="Enter your college name"
                  name="collegeName"
                  register={register}
                  errors={errors}
                  requiredMessage="College name is required"
                />
                <div className="flex items-center w-full gap-2">
                  <FormField
                    label="Course Name"
                    placeholder="Enter your course name"
                    name="courseName"
                    register={register}
                    errors={errors}
                    requiredMessage="Course name is required"
                  />
                  <FormField
                    label="CGPA"
                    placeholder="Enter your CGPA"
                    name="cgpa"
                    register={register}
                    errors={errors}
                    requiredMessage="CGPA is required"
                  />
                </div>
              </div>

              {/* Project Section */}
              <div className="flex flex-col gap-6">
                <FormField
                  label="Project Title"
                  placeholder="Enter your project title"
                  name="projectTitle"
                  register={register}
                  errors={errors}
                  requiredMessage="Project title is required"
                />
                <div className="flex items-center w-full gap-2">
                  <FormField
                    label="Project Description"
                    placeholder="Enter your project description"
                    name="projectDescription"
                    register={register}
                    errors={errors}
                    requiredMessage="Project description is required"
                  />
                  <FormField
                    label="Repo Link"
                    placeholder="Enter your project repository link"
                    name="repoLink"
                    register={register}
                    errors={errors}
                    requiredMessage="Repo link is required"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between w-full mt-8">
                <Button
                  label="Reset"
                  type="button"
                  className="w-1/3 bg-white text-gray-900 border border-zinc-300"
                  onClick={() => reset()}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="w-3/5 bg-gradient-to-l from-purple-300 to-rose-500 font-medium text-white"
                >
                  Create
                </Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
