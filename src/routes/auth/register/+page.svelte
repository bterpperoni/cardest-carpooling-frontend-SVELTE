<script lang='ts'>
    import Button from "$lib/components/button/Button.svelte";
    import Form from "$lib/components/form/Form.svelte";
    import Input from "$lib/components/form/Input.svelte";
    
    let username: string = '';
    let password: string = '';
    let first_name: string = '';
    let family_name: string = '';
    let email: string = '';
    </script>
    
    
    <div class="form-register">
      <Form>
          <Input customClassDivInput="w-50 m-1" customClassInput="h-25" label="Username " name="username" id="formFloatingInput" placeholder="example" bind:value={username}></Input>
          <Input customClassDivInput="w-50 m-1" customClassInput="h-25" label="Password " name="password" id="formFloatingPassword" placeholder="password" bind:value={password}></Input>
          <Input customClassDivInput="w-50 m-1" customClassInput="h-25" label="First name " name="first-name" id="floatingInputGroup1" placeholder="John" bind:value={first_name}></Input>
          <Input customClassDivInput="w-50 m-1" customClassInput="h-25" label="Family name " name="family-name" id="floatingInputGroup2" placeholder="Doe" bind:value={family_name}></Input>
          <Input customClassDivInput="w-50 m-1" customClassInput="h-25" label="Email " name="email" id="floatingInputGroup3" placeholder="Doe@example.com" bind:value={email}></Input>
          <Button customClass="w-25 m-2" type="submit" text="Register"></Button>
      </Form>
    </div>
    
    <style>
    .form-register {
      position: relative;
      top: 10vh;
    }
    </style>