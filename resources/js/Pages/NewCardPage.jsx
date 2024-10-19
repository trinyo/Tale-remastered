import React from "react";
import { useForm } from "@inertiajs/react";

export default function NewCardPage() {
    const { data, setData, post, processing, errors } = useForm({
        front: "",
        back: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("card.store"));
    }

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                value={data.front}
                onChange={(e) => setData("front", e.target.value)}
            />
            {errors.front && <div>{errors.front}</div>}
            <input
                type="text"
                value={data.back}
                onChange={(e) => setData("back", e.target.value)}
            />
            {errors.back && <div>{errors.back}</div>}
            <button type="submit" disabled={processing}>
                Login
            </button>
        </form>
    );
}
