"use client";
import { PatchUser } from "@/app/actions/user/edit-user";
import { EditUser, User, editUserSchema } from "@/dtos";
import { useFetchCurrentUserData } from "@/utils/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@/components";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

interface EditProfilePageProps {
  user: User;
}

export default function EditProfilePage({}: EditProfilePageProps) {
  const router = useRouter();

  const { data: user } = useFetchCurrentUserData();

  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm<EditUser>({
    resolver: zodResolver(editUserSchema),
  });

  useEffect(() => reset(user), [reset, user]);

  const handleFormSubmitSuccess = useCallback(
    async (data: EditUser) => {
      if (!user) return;
      await PatchUser(user.id, data);
      alert("Profile updated successfully");
      router.back();
    },
    [user, router]
  );

  const handleFormSubmitError = useCallback(async (error: any) => {}, []);

  const handleCancelButtonClick = useCallback(() => {
    reset();
    router.back();
  }, [reset, router]);

  if (!user) return null;

  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex gap-8 w-3/4">
        {/* <Image
          src="/images/cards/maxwell1.jpg"
          alt="image"
          width={400}
          height={400}
          className="rounded-full w-1/3 lg:m-8 h-fit"
        /> */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium">Display Name</p>
            <Input type="text" {...register("displayName")} />
            <p className="text-xs font-semibold text-red-500">
              {errors.biography?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-lg font-medium">Biography</p>
            <Textarea
              autosize
              maxRows={5}
              minRows={5}
              {...register("biography")}
            />
            <p className="text-xs font-semibold text-red-500">
              {errors.biography?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-lg font-medium">Contact Email</p>
            <Input type="email" {...register("email")} />
            <p className="text-xs font-semibold text-red-500">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              className="text-gray-400 bg-gray-400"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </Button>
            <Button
              disabled={!isDirty}
              onClick={handleSubmit(
                handleFormSubmitSuccess,
                handleFormSubmitError
              )}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
