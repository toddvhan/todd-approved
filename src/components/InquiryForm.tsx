"use client";

import { useActionState, useId } from "react";
import { submitInquiry, type InquiryState } from "@/app/inquire/actions";

const fieldClass =
  "mt-2 w-full border border-line bg-ink px-4 py-3 text-ivory outline-none transition-colors focus:border-gold";

export function InquiryForm({
  watch,
  compact = false,
}: {
  watch?: string;
  compact?: boolean;
}) {
  const trapId = useId();
  const [state, action, pending] = useActionState<InquiryState | null, FormData>(
    submitInquiry,
    null,
  );

  if (state?.ok) {
    return (
      <p className="border border-gold/40 bg-panel px-5 py-6 text-base leading-7 text-ivory-dim">
        Sent. I&apos;ll get back to you.
      </p>
    );
  }

  return (
    <form action={action} className="relative flex flex-col gap-6">
      {watch ? (
        <>
          <input type="hidden" name="watch" value={watch} />
          <p className="text-sm text-ivory-dim">
            About <span className="text-ivory">{watch}</span>
          </p>
        </>
      ) : null}

      <div className="absolute left-[-10000px]" aria-hidden="true">
        <label htmlFor={trapId}>Company</label>
        <input
          id={trapId}
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="block">
        <span className="text-[11px] tracking-[0.28em] text-gold uppercase">
          Name
        </span>
        <input
          className={fieldClass}
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={80}
        />
      </label>

      <label className="block">
        <span className="text-[11px] tracking-[0.28em] text-gold uppercase">
          Your email
        </span>
        <input
          className={fieldClass}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={120}
        />
      </label>

      <label className="block">
        <span className="text-[11px] tracking-[0.28em] text-gold uppercase">
          Message
        </span>
        <textarea
          className={`${fieldClass} resize-y ${compact ? "min-h-28" : "min-h-36"}`}
          name="message"
          required
          minLength={10}
          maxLength={4000}
          defaultValue={
            watch
              ? `Hi Todd V,\n\nI'm interested in the ${watch}.\n\n`
              : ""
          }
        />
      </label>

      {state?.error ? (
        <p className="text-sm text-gold">{state.error}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="border border-gold bg-gold px-5 py-3 text-[12px] tracking-[0.22em] text-ink uppercase transition-colors hover:bg-transparent hover:text-gold disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending" : "Send"}
      </button>
    </form>
  );
}
