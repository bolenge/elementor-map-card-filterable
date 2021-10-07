jQuery(document).ready(function($) {
	function echos(data) {
		console.log(data)
	}

	/**
	 * Allows show reuslt firtered to map card
	 * @author Don de Dieu Bolenge
	 * @param {String} action
	 * @param {String} method
	 * @param {String} data
	 * @param {Function} cbBeforeSend
	 * @param {Function} cbComplete
	 * @return {void}
	 */
	function filterShops(action, method, data, cbBeforeSend, cbComplete = null) {
		$.ajax({
			url: action,
			type: method,
			data: data,
			beforeSend: () => {
				cbBeforeSend()
			},
			complete: () => {
				if (cbComplete) {
					cbComplete()
				}
			},
			success: (res) => {
				let result = ''
				const cordinates = res ? res : []

				if (res) {
					if (res.length) {
						for (const r of res) {
							result += `
								<div class="resultSearch" data-cordinate='${window.btoa(JSON.stringify(r))}'>
									<h5 class="titleResult">${r.title}</h5>
									<ul class="listResultContact">
										<li><i class="fas fa-map-marker-alt"></i> ${r.adresse}</li>
										<li><i class="fas fa-map"></i> Code Postal : ${r.code_postal}</li>
										<li><i class="fas fa-phone"></i> ${r.telephone}</li>
									</ul>
								</div>
							`
						}

						initMap(cordinates)
					}else {
						result = '<h4>Aucun point de vente trouvé...</h4>'
					}
				}else {
					result = '<h4>Aucun point de vente trouvé...</h4>'
				}

				$('#cardResult').html(result)
			},
			error: (err) => {
				console.log("Erreur :", err)
			}
		})
	}

	filterShops($('#filterForm').attr('action'), 'POST', 'action=myfilter', () => {
		$('#cardResult').html('<div class="loader-data"><h4>Chargement...</h4></div>')
	})

	$("#filterForm").on("submit", function(e) {
		e.preventDefault()

		const data = $(this).serialize()
		const action = $(this).attr("action")
		const method = $(this).attr("method")
		const beforeSend = () => {
			$("#btnFilter").html('<i class="fas fa-spinner fa-pulse"></i>')
			$('#cardResult').html('<div class="loader-data"><h4>Chargement...</h4></div>')
		}

		const complete = () => {
			$("#btnFilter").html('<i class="fas fa-search"></i>')
		}

		filterShops(action, method, data, beforeSend, complete)
	})
})