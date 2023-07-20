<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|min:2|string|max:30|',
            'email' => 'required|email|max:255',
            'movil' => 'required|string|min:7|max:12',
            'empresa' => 'nullable|string|max:255',
            'mensaje' => 'required|string',
            'check' => 'accepted'
        ];
    }
}
