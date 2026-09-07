"use client";

import { useRef, useState } from "react";
import { MessageSquare, X } from "lucide-react";
import SubmissionForm from "./SubmissionForm";

export default function ContributionModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formKey, setFormKey] = useState(0);

  const open = () => {
    setFormKey((k) => k + 1);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-flex items-center gap-2 px-8 py-4 bg-sea-600 text-white font-medium rounded-full hover:bg-sea-700 transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sea-500 focus:ring-offset-2"
      >
        <MessageSquare className="w-5 h-5" />
        Share your story
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        aria-labelledby="contribution-modal-title"
        className="p-0 m-auto max-w-2xl w-[calc(100%-2rem)] rounded-2xl shadow-2xl backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      >
        <div className="relative bg-white rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sea-500"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="px-6 sm:px-8 pt-8 pb-6 max-h-[85vh] overflow-y-auto">
            <div className="mb-6 pr-8">
              <h2
                id="contribution-modal-title"
                className="text-2xl font-bold text-slate-800 mb-1"
              >
                Get in touch
              </h2>
              <p className="text-sm text-slate-500">
                Share a story, ask a question, or offer to help.
              </p>
            </div>

            <SubmissionForm key={formKey} onSuccess={close} />
          </div>
        </div>
      </dialog>
    </>
  );
}
