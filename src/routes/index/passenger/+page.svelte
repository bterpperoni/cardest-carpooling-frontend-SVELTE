<!-- Map.svelte -->
<script lang='ts'>
    import { onMount } from 'svelte';
    import { Loader } from '@googlemaps/js-api-loader';
	import type { PageData } from './$types';

    export let data: PageData;
    onMount(() => {
      const loader = new Loader({
        apiKey: data.API_KEY,
        version: 'weekly',
      });
  
      loader.load().then(() => {
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: { lat: 50.463727, lng: 3.938247 },
          zoom: 16,
        });
  
        // Ajouter des marqueurs pour les points de départ des conducteurs
        // Voir https://developers.google.com/maps/documentation/javascript/markers pour plus d'informations
      });
    });
  </script>
  
  <div id="map" style="height: 400px;"></div>