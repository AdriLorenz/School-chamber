using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Events;

public class CountdownTimer : MonoBehaviour
{
    float currentTime = 0f;
    float startingTime = 10f;


    public UnityEvent CountdownOver;

    [SerializeField] Text countdownText;

    

    void Start()
    {
        
    }


    void Update()
    {
        Countdown();
    }

    void OnEnable() {
        currentTime = startingTime;
    }

    void OnDisable() {
        currentTime = 0f;
    }

    void Countdown () {
        currentTime -= 1 * Time.deltaTime;
        countdownText.text = currentTime.ToString("0");

        if (currentTime <= 0) {
            countdownText.gameObject.SetActive(false);
            CountdownOver.Invoke();
        }
    }
}
