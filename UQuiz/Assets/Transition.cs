using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class Transition : MonoBehaviour
{
    private AudioSource stateSound;
    float currentTime = 0f;
    float startingTime = 3f;
    private int counter = 0;


    public UnityEvent transitionOver;

    void OnEnable() {
        counter = 0;
        currentTime = 0f;
        currentTime = startingTime;
        stateSound = this.GetComponent<AudioSource>();
        stateSound.Play();
    }

    void OnDisable() {
        currentTime = 0f;
    }

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Countdown();
    }

    void Countdown () {
        currentTime -= 1 * Time.deltaTime;

        if (currentTime <= 0 && counter < 1) {
            transitionOver.Invoke();
            counter++;
        }
    }
}
