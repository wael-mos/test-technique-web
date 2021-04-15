import { useEffect } from 'react';

/** 
 * @description useEffect qui abort si le composant est unmount (permet d'éviter les leaks).
 * 
 * @param {Function} onSuccess La fonction qui sera executé.
 * @param {any} data La data qui sera envoyé dans la fonction onSuccess.
 * @param {Array} deps Les dépendances fournit au useEffect.
 * @return {null} 
 * 
 */
const useEffectCustom = (onSuccess, data = null, deps = []) => {
	useEffect(() => {
		let isSubscribed = true;
		if (isSubscribed) {
			onSuccess(data);
		}
		return () => isSubscribed = false;
		/* eslint-disable react-hooks/exhaustive-deps */
	}, deps)
	return (null);
};

export default useEffectCustom;