"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TextInput } from "@/components/ui/TextInput";
import { api } from "@/lib/api-client";
import type { User } from "@/types/domain";

type AuthPageProps = {
  mode: "login" | "register";
};

export function AuthPage({ mode }: AuthPageProps) {
  const router = useRouter();
  const isRegister = mode === "register";
  const [form, setForm] = useState({ fullname: "", email: "", password: "", contact: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api<{ user: User }>("/api/users/me")
      .then(() => router.replace("/dashboard"))
      .catch(() => null);
  }, [router]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      await api(`/api/users/${isRegister ? "register" : "login"}`, {
        method: "POST",
        body: JSON.stringify(form),
      });
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen bg-black text-white lg:grid-cols-2">
      <div className="relative hidden overflow-hidden p-4 lg:block">
        <div className="absolute inset-4">
          <Image
            src="/images/pula-20000-sdb-46398d-preview-1.png"
            alt=""
            fill
            priority
            sizes="50vw"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="absolute right-10 top-8 flex items-center gap-3 rounded bg-black/30 px-3 py-2">
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <Image src="/images/logo3.png" alt="" width={40} height={40} className="h-10 w-10 rounded" />
          <span className="font-bold">TrackTruck</span>
        </div>
      </div>
      <section className="flex items-center justify-center px-6 py-12">
        <form onSubmit={submit} className="w-full max-w-md space-y-4">
          <h1 className="mb-8 text-center text-3xl font-bold">
            {isRegister ? "Sign Up to" : "Log in to"} TrackTruck
          </h1>
          {error && <p className="rounded border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">{error}</p>}
          {isRegister && (
            <TextInput label="Full Name" value={form.fullname} onChange={(fullname) => setForm({ ...form, fullname })} />
          )}
          <TextInput label="Email" type="email" value={form.email} onChange={(email) => setForm({ ...form, email })} />
          <TextInput label="Password" type="password" value={form.password} onChange={(password) => setForm({ ...form, password })} />
          {isRegister && (
            <TextInput label="Contact" value={form.contact} onChange={(contact) => setForm({ ...form, contact })} />
          )}
          <button disabled={loading} className="w-full rounded-lg bg-white px-4 py-3 font-semibold text-black disabled:opacity-50">
            {loading ? "Please wait..." : isRegister ? "Create Account" : "Log in"}
          </button>
          <button
            type="button"
            onClick={() => router.push(isRegister ? "/login" : "/register")}
            className="w-full text-sm text-neutral-300 hover:text-white"
          >
            {isRegister ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
          </button>
        </form>
      </section>
    </div>
  );
}
