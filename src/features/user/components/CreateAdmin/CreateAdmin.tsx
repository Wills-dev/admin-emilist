"use client";

import { Lock, Mail, Phone, User } from "lucide-react";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateAdmin } from "../../hooks/useCreateAdmin";

import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import Modal from "@/components/molecules/Modal/Modal";

const CreateAdmin = () => {
  const {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    isPending,
    createAdminForm,
  } = useCreateAdmin();
  return (
    <Modal btnTitle="Create Admin">
      <DialogHeader>
        <DialogTitle>Create Admin</DialogTitle>
        <DialogDescription>
          Create new admin to access dashboard
        </DialogDescription>
      </DialogHeader>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label title="Full Name" />
          <Input
            value={createAdminForm.fullName}
            onChange={handleChange}
            type="text"
            name="fullName"
            placeholder=""
            icon={<User className="absolute left-2 w-5 h-5 text-gray-600" />}
          />
        </div>
        <div className="space-y-2">
          <Label title="Mobile Number" />
          <Input
            value={createAdminForm.mobile}
            onChange={handleChange}
            type="text"
            name="mobile"
            placeholder=""
            icon={<Phone className="absolute left-2 w-5 h-5 text-gray-600" />}
          />
        </div>
        <div className="space-y-2">
          <Label title="Email" />
          <Input
            value={createAdminForm.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="you@example.com"
            icon={<Mail className="absolute left-2 w-5 h-5 text-gray-600" />}
          />
        </div>
        <div className="space-y-2">
          <Label title="Password" />
          <Input
            value={createAdminForm.password}
            onChange={handleChange}
            type={showPassword}
            showPassword={showPassword}
            name="password"
            onTogglePassword={togglePasswordVisibility}
            placeholder="••••••••"
            icon={<Lock className="absolute left-2 w-5 h-5 text-gray-600" />}
          />
        </div>
        <Button type="submit" loading={isPending}>
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default CreateAdmin;
