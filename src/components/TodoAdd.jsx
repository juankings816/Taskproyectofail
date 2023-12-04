import React from 'react';
import { useForm } from '../hooks/UseForm';

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, fecha, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			fecha:fecha,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='Ingresa tu nueva tarea!'
			/>
			<input
				type='date'
				className='input-add'
				name='fecha'
				value={fecha}
				onChange={onInputChange}
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};
