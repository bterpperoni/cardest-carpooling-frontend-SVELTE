<!-- Map.svelte -->
<script lang='ts'>
    import { onMount } from 'svelte';
    import { Loader } from '@googlemaps/js-api-loader';
	  import type { PageData } from './$types';
	  import Dropdown from '$lib/components/dropdown/Dropdown.svelte';

    export let data: PageData;

    let selected: number;

    $ : console.log(selected);

    onMount(() => {
      const loader = new Loader({
        apiKey: data.API_KEY,
        version: 'weekly',
      });
  
      loader.load().then(() => {
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: { lat: 50.463727, lng: 3.938247 },
          zoom: 12,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap']
          },
          clickableIcons: true
        });
  
      data.DESTINATIONS.forEach((destination) => {
          const marker = new google.maps.Marker({
            position: { lat: destination.latitude, lng: destination.longitude},
            map,
            title: destination.name,
            clickable: true,
            label: {
              text: destination.name,
              color: 'white',
              className : 'marker-label',
              fontWeight: 'bold'
            },
          });
        });
      });
    });
  </script>
  
  <div>
    <div id="map" style="height: 300px;"></div>
    <Dropdown label="Destinations" bind:selected options={data.DESTINATIONS}></Dropdown>
  </div>

