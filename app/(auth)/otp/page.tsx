"use client";

import { useSignupStore } from "@/app/stores/signupStore";
import { Auth } from "@/features/auth/api";
import { useAuth } from "@/features/auth/hooks";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function OtpPage() {
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const {otp: verifyOtp, loading} = useAuth()
  const router = useRouter();

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
    if (!/^\d+$/.test(pasted)) return;

    const newOtp = pasted.split("");
    setOtp([...newOtp, ...Array(OTP_LENGTH - newOtp.length).fill("")]);

    inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };
 const email = useSignupStore((state) => state.email);
  const clear = useSignupStore((state) => state.clear);
  const handleSubmit = async() => {
    const finalOtp = otp.join("");
    console.log("Submitting OTP:", finalOtp, "for email:", email);
    const response = await verifyOtp(email, finalOtp);
    console.log("OTP verification response:", response);
    clear();   
    router.push("/dashboard");
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Verify OTP
        </h1>
        <p className="mt-2 text-center text-sm text-gray-500">
          Enter the 6-digit code sent to your email
        </p>

        <div className="mt-6 flex justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputsRef.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="h-12 w-12 rounded-lg border border-gray-300 text-center text-lg font-semibold outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full rounded-lg bg-indigo-600 py-2.5 text-white font-medium transition hover:bg-indigo-700"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Didn’t receive the code?{" "}
          <button className="text-indigo-600 hover:underline">
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}